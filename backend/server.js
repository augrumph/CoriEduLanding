// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import jwt from "jsonwebtoken";

const app = express();
const port = 5000;

// Use uma variável de ambiente para o segredo do JWT em produção
const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_secreta";

// Middleware global
app.use(cors());
app.use(bodyParser.json());

// Função para abrir o banco de dados
async function openDb() {
  return open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
}

// Cria a tabela e protege contra deleções e atualizações
(async () => {
  try {
    const db = await openDb();

    // Criação da tabela com restrições
    await db.exec(`
      CREATE TABLE IF NOT EXISTS formData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE, -- E-mail único para evitar duplicatas
        profession TEXT,
        university TEXT,
        period TEXT,
        specialization TEXT,
        institution TEXT
      );

      -- Trigger para prevenir DELETE
      CREATE TRIGGER IF NOT EXISTS prevent_delete
      BEFORE DELETE ON formData
      BEGIN
        SELECT RAISE(FAIL, 'Operação DELETE não permitida');
      END;

      -- Trigger para prevenir UPDATE
      CREATE TRIGGER IF NOT EXISTS prevent_update
      BEFORE UPDATE ON formData
      BEGIN
        SELECT RAISE(FAIL, 'Operação UPDATE não permitida');
      END;
    `);

    console.log("Tabela 'formData' criada e protegida com sucesso.");
  } catch (error) {
    console.error("Erro ao criar/verificar tabela 'formData':", error);
  }
})();

/**
 * Middleware para verificar o token
 */
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ error: "Token não fornecido no cabeçalho Authorization." });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
}

/**
 * Rota de login para gerar o token
 */
app.get("/api/login", (req, res) => {
  const { username, password } = req.query;

  if (username === "jcvlz80YOFEE" && password === "teste") {
    const token = jwt.sign({ userId: 1, username }, JWT_SECRET, {
      expiresIn: "12h",
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Credenciais inválidas." });
  }
});

/**
 * Rota para salvar os dados do formulário
 * Apenas insere novos registros no banco
 */
app.post("/api/form", async (req, res) => {
  const {
    name,
    email,
    profession,
    university,
    period,
    specialization,
    institution,
  } = req.body;

  try {
    const db = await openDb();

    // Insere novos registros no banco
    const result = await db.run(
      `INSERT INTO formData (name, email, profession, university, period, specialization, institution)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, profession, university, period, specialization, institution]
    );

    res.status(201).json({
      message: "Dados do formulário recebidos e armazenados com sucesso.",
      id: result.lastID,
    });
  } catch (error) {
    if (error.message.includes("UNIQUE constraint failed")) {
      res.status(400).json({ error: "E-mail já cadastrado." });
    } else {
      console.error("Erro ao salvar dados do formulário:", error);
      res.status(500).json({ error: "Erro ao salvar dados do formulário." });
    }
  }
});

/**
 * Rota para obter todos os dados do formulário
 * Protegida pelo middleware verifyToken
 */
app.get("/api/form", verifyToken, async (req, res) => {
  try {
    const db = await openDb();
    const rows = await db.all("SELECT * FROM formData");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar dados do formulário:", error);
    res.status(500).json({ error: "Erro ao buscar dados do formulário." });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
