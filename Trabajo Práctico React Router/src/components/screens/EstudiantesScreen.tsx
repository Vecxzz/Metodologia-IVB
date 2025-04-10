import { useEffect, useState } from "react";
import { Estudiante } from "../types/types";
import { EstudianteCard } from "../UI/EstudianteCard";
import { useSearchParams } from "react-router";
import { getEstudiantesByCursoId } from "../http/api";
import styles from "./EstudiantesScreen.module.css";

export const EstudiantesScreen: React.FC = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [searchParams] = useSearchParams();
  const cursoId = searchParams.get("curso");

  useEffect(() => {
    const fetchEstudiantes = async () => {
      if (cursoId) {
        try {
          const data = await getEstudiantesByCursoId(cursoId);
          setEstudiantes(data);
        } catch (error) {
          throw error;
        }
      }
    };
    fetchEstudiantes();
  }, [cursoId]);

  return (
    <div className={styles.contenedorEstudiantes}>
      <h1>Lista de Estudiantes</h1>
      <div className={styles.contenedorEstudiantesCard}>
        {estudiantes.length > 0 ? (
          estudiantes.map((estudiante: Estudiante) => (
            <EstudianteCard key={estudiante.id} estudiante={estudiante} />
          ))
        ) : (
          <p>No hay estudiantes en este curso</p>
        )}
      </div>
    </div>
  );
};
