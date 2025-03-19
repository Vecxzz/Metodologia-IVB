import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareaStore";
import { ITarea } from "../types/ITarea";
import { getAllTareas } from "../http/tareas";
import {
  editarTarea,
  eliminarTareaPorId,
  postNuevaTarea,
} from "../http/tareas";
import Swal from "sweetalert2";

export const useTareas = () => {
  const {
    tareas,
    setArrayTareas,
    agregarNuevaTarea,
    eliminarUnaTarea,
    editarUnaTarea,
  } = tareaStore(
    useShallow((state) => ({
      tareas: state.tareas,
      setArrayTareas: state.setArrayTareas,
      agregarNuevaTarea: state.agregarNuevaTarea,
      eliminarUnaTarea: state.eliminarUnaTarea,
      editarUnaTarea: state.editarUnaTarea,
    }))
  );

  const getTareas = async () => {
    const data = await getAllTareas();
    if (data) setArrayTareas(data);
  };

  const crearTarea = async (nuevaTarea: ITarea) => {
    agregarNuevaTarea(nuevaTarea);
    try {
      await postNuevaTarea(nuevaTarea);
      Swal.fire("Éxito", "Tarea creada correctamente", "success");
    } catch (error) {
      eliminarUnaTarea(nuevaTarea.id);
      console.log("Algo salio mal al crear la tarea");
    }
  };

  const putTareaEditar = async (tareaEditada: ITarea) => {
    console.log("Editando tarea:", tareaEditada); // <-- Debug
    const estadoPrevio = tareas.find((el) => el.id === tareaEditada.id);

    editarUnaTarea(tareaEditada);
    try {
      await editarTarea(tareaEditada);
      Swal.fire("Éxito", "Tarea actualizada correctamente", "success");
    } catch (error) {
      if (estadoPrevio) editarTarea(estadoPrevio);
      console.log("Algo salio mal al editar");
    }
  };

  const eliminarTarea = async (idTarea: string) => {
    const estadoPrevio = tareas.find((el) => el.id === idTarea);
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) return;
    eliminarUnaTarea(idTarea);

    try {
      await eliminarTareaPorId(idTarea);
    } catch (error) {
      if (estadoPrevio) agregarNuevaTarea(estadoPrevio);
      console.log("Algo salio mal al editar");
    }
  };

  return {
    getTareas,
    crearTarea,
    putTareaEditar,
    eliminarTarea,
    tareas,
  };
};
