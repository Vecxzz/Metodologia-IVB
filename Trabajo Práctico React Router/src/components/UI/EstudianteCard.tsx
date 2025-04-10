import React from "react";
import { Estudiante } from "../types/types";
import styles from "./EstudianteCard.module.css";

interface EstudianteCardProps {
  estudiante: Estudiante;
}

export const EstudianteCard: React.FC<EstudianteCardProps> = ({
  estudiante,
}) => {
  return (
    <div className={styles.estudianteCard}>
      <p>Nombre: {estudiante.nombre}</p>
      <p>Edad: {estudiante.edad}</p>
    </div>
  );
};
