import axios from "axios";
import { Curso, Estudiante } from "../types/types";

const API_URL = "http://localhost:3001";

export const getCursos = async (): Promise<Curso[]> => {
  try {
    const response = await axios.get(`${API_URL}/cursos`);
    return response.data;
  } catch (error) {
    console.log("Error al cargar los cursos ", error);
    throw error;
  }
};

export const getEstudiantesByCursoId = async (
  cursoId: string
): Promise<Estudiante[]> => {
  try {
    const response = await axios.get(`${API_URL}/cursos/${cursoId}`);
    return response.data.estudiantes;
  } catch (error) {
    console.log("Error al cargar los estudiantes del curso ", error);
    throw error;
  }
};
