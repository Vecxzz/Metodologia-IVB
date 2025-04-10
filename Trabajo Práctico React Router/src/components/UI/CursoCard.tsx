import { Link } from "react-router-dom";
import { Curso } from "../types/types";
import styles from "./CursoCard.module.css";

interface CursoCardProps {
  curso: Curso;
}

export const CursoCard: React.FC<CursoCardProps> = ({ curso }) => {
  return (
    <div className={styles.cursoCard}>
      <h2>{curso.nombre}</h2>
      <p>Cantidad de alumnos: {curso.estudiantes.length}</p>
      <button>
        <Link to={`/estudiantes?curso=${curso.id}`}>Ver estudiantes</Link>
      </button>
    </div>
  );
};
