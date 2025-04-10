import React from "react";
import { Route, Routes } from "react-router";
import { CursosScreen } from "../screens/CursosScreen";
import { EstudiantesScreen } from "../screens/EstudiantesScreen";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/cursos" element={<CursosScreen />} />
      <Route path="/estudiantes" element={<EstudiantesScreen />} />
      <Route path="/" element={<CursosScreen />} />
      <Route path="*" element={<div>Ruta no encontrada</div>} />
    </Routes>
  );
};
