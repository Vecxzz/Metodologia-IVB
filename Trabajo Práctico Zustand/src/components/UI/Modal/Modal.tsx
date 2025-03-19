import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { tareaStore } from "../../../store/tareaStore";
import styles from "../Modal/Modal.module.css";
import { ITarea } from "../../../types/ITarea";
import { useTareas } from "../../../hooks/useTareas";

type IModal = {
  handleCloseModal: VoidFunction;
};

const initialState: ITarea = {
  titulo: "",
  descripcion: "",
  fechaLimite: "",
};

export const Modal: FC<IModal> = ({ handleCloseModal }) => {
  const tareaActiva = tareaStore((state) => state.tareaActiva);
  const setTareaActiva = tareaStore((state) => state.setTareaActiva);

  const { crearTarea, putTareaEditar } = useTareas();

  const [formValues, setFormValues] = useState<ITarea>(initialState);

  useEffect(() => {
    if (tareaActiva) setFormValues(tareaActiva);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [`${name}`]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (tareaActiva) {
      putTareaEditar(formValues);
    } else {
      crearTarea({ ...formValues, id: new Date().toDateString() });
    }
    setTareaActiva(null);
    handleCloseModal();
  };

  return (
    <div className={styles.containerPrincipalModal}>
      <div className={styles.contentPopUP}>
        <div>
          <h3>{tareaActiva ? "Editar Tarea" : "Crear Tarea"}</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContent}>
          <div>
            <input
              placeholder="Título"
              type="text"
              required
              value={formValues.titulo}
              autoComplete="off"
              name="titulo"
              onChange={handleChange}
            />
            <textarea
              placeholder="Descripción"
              required
              value={formValues.descripcion}
              name="descripcion"
              onChange={handleChange}
            />
            <input
              type="date"
              value={formValues.fechaLimite}
              required
              autoComplete="off"
              name="fechaLimite"
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonCard}>
            <button
              onClick={handleCloseModal}
              className={styles.eliminarTareaButton}
            >
              Cancelar
            </button>
            <button type="submit" className={styles.agregarTareaButton}>
              {tareaActiva ? "Editar Tarea" : "CrearTarea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
