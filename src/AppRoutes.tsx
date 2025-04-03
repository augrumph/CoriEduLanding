// AppRoutes.tsx
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import MainContent from "./MainContent";
import ScheduleTestModal from "./components/ScheduleTestModal";

export function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  // Se o link que abre o modal enviar o state com a backgroundLocation,
  // ele estará disponível aqui.
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      {/* Renderiza o conteúdo principal usando a backgroundLocation (se existir)
          ou a location atual */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainContent />} />
        {/* Outras rotas principais podem ser definidas aqui */}
      </Routes>

      {/* Rota do modal: sempre renderizada fora do switch principal */}
      <Routes>
        <Route
          path="/modal"
          element={
            <ScheduleTestModal
              open={true}
              onOpenChange={() =>
                state?.backgroundLocation ? navigate(-1) : navigate("/")
              }
            />
          }
        />
      </Routes>
    </>
  );
}
