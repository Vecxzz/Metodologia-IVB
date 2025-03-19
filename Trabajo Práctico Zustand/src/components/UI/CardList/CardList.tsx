import { useTareas } from "../../../hooks/useTareas";
import { ITarea } from "../../../types/ITarea";
import styles from "../CardList/CardList.module.css";

type ICardList = {
  tarea: ITarea;
  handleOpenModalEdit: (tarea: ITarea) => void;
  handleCloseModal: VoidFunction;
};

export const CardList: FC<ICardList> = ({ tarea, handleOpenModalEdit }) => {
  const { eliminarTarea } = useTareas();
  const eliminarTareaById = () => {
    eliminarTarea(tarea.id);
  };

  const editarTarea = () => {
    handleOpenModalEdit(tarea);
  };

  return (
    <div className={styles.containerCard}>
      <div>
        <h3>Título: {tarea.titulo}</h3>
        <p>Descripción: {tarea.descripcion}</p>
        <p>
          <b>Fecha Límite: {tarea.fechaLimite}</b>
        </p>
      </div>
      <div className={styles.actionCard}>
        <button
          onClick={eliminarTareaById}
          className={styles.eliminarTareaButton}
        >
          Eliminar
        </button>
        <button onClick={editarTarea} className={styles.editarTareaButton}>
          Editar
        </button>
      </div>
    </div>
  );
};
