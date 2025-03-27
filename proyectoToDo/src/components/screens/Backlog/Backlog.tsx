import Dropdown from "../../UI/Dropdown/Dropdown";
import styles from "./Backlog.module.css";

export const Backlog = () => {
  return (
    <div className={styles.containerBacklog}>
      <h1>Backlog</h1>
      <button className={styles.crearTareaButton}>
        Crear Tarea
        <span className={`material-symbols-outlined ${styles.backlogIcon}`}>
          playlist_add
        </span>
      </button>

      <div className={styles.containerTareaBacklog}>
        <p>
          Título: Tarea 2 Descripción: Descripción
          <div className={styles.buttons}>
            <button className={styles.sendButton}>
              Enviar a
              <span className={`material-symbols-outlined ${styles.sendIcon}`}>
                send
              </span>
            </button>
            <Dropdown />
            <button className={styles.visibilityButton}>
              <span className="material-symbols-outlined">visibility</span>
            </button>
            <button className={styles.editButton}>
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button className={styles.deleteButton}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};
