import { useEffect, useState } from "react";
import { Curso } from "../types/types";
import { CursoCard } from "../UI/CursoCard";
import { getCursos } from "../http/api";
import styles from "./CursosScreen.module.css";

export const CursosScreen: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getCursos();
        setCursos(data);
      } catch (error) {
        throw error;
      }
    };
    fetchCursos();
  }, []);

  return (
    <div className={styles.contenedorCursos}>
      <h1>Lista de Cursos</h1>
      <div className={styles.contenedorCursoCard}>
        {cursos.length > 0 ? (
          cursos.map((curso) => <CursoCard key={curso.id} curso={curso} />)
        ) : (
          <p>No hay cursos disponibles.</p>
        )}
      </div>
    </div>
  );
};
