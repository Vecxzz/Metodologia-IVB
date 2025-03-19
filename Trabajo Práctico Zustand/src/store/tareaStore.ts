import { create } from "zustand";
import { ITarea } from "../types/ITarea";

interface ITareaStore {
  tareas: ITarea[];
  tareaActiva: ITarea | null;
  setTareaActiva: (tareaActiva: ITarea | null) => void;
  setArrayTareas: (arrayDeTareas: ITarea[]) => void;
  agregarNuevaTarea: (nuevaTarea: ITarea) => void;
  editarUnaTarea: (tareaActualizada: ITarea) => void;
  eliminarUnaTarea: (idTarea: string) => void;
}

export const tareaStore = create((set) => ({
  tareas: [],
  tareaActiva: null,

  //Funciones modificadoras para el array

  //Agregar array de tareas
  setArrayTareas: (arrayDeTareas) => set(() => ({ tareas: arrayDeTareas })),

  //Agregar una tarea al array
  agregarNuevaTarea: (nuevaTarea) =>
    set((state) => ({ tareas: [...state.tareas, nuevaTarea] })),

  //Editar una tarea del array
  editarUnaTarea: (tareaEditada: ITarea) =>
    set((state) => ({
      tareas: state.tareas.map((t) =>
        t.id === tareaEditada.id ? tareaEditada : t
      ),
    })),

  //Eliminar una tarea del array
  eliminarUnaTarea: (idTarea) =>
    set((state) => {
      const arregloTareas = state.tareas.filter(
        (tarea) => tarea.id !== idTarea
      );
      return { tareas: arregloTareas };
    }),

  //Setear la tarea activa
  setTareaActiva: (tareaActivaIn) =>
    set(() => ({ tareaActiva: tareaActivaIn })),
}));
