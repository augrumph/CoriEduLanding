// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
