// server.js

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Habilita CORS para todas as origens
app.use(bodyParser.json()); // Analisa requisições com JSON

// Função para abrir o banco de dados
async function openDb() {
  return open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
}

// Cria a tabela se não existir
(async () => {
  try {
    const db = await openDb();
    await db.exec(`
      CREATE TABLE IF NOT EXISTS formData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        profession TEXT,
        university TEXT,
        period TEXT,
        specialization TEXT,
        institution TEXT
      )
    `);
    console.log("Tabela 'formData' verificada/criada com sucesso.");
  } catch (error) {
    console.error("Erro ao criar/verificar tabela 'formData':", error);
  }
})();

// Rota para salvar os dados do formulário
app.post("/api/form", async (req, res) => {
  console.log("Recebida requisição POST em /api/form");
  console.log("Corpo da requisição:", req.body);

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

    // Insere os dados do formulário no banco de dados usando query SQL
    const result = await db.run(
      `INSERT INTO formData (name, email, profession, university, period, specialization, institution)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, profession, university, period, specialization, institution]
    );

    console.log("Dados inseridos com sucesso. ID:", result.lastID);

    res.status(201).json({
      message: "Dados do formulário recebidos e armazenados com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao salvar dados do formulário:", error);
    res.status(500).json({ error: "Erro ao salvar dados do formulário." });
  }
});

// Rota para obter todos os dados do formulário
app.get("/api/form", async (req, res) => {
  console.log("Recebida requisição GET em /api/form");
  try {
    const db = await openDb();

    const rows = await db.all("SELECT * FROM formData");

    console.log("Dados recuperados com sucesso:", rows);

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
