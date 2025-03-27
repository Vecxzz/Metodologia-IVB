import styles from "../Modal/Modal.module.css";

export const Modal = () => {
  return (
    <div className={styles.containerPrincipalModal}>
      <div className={styles.contentPopUP}>
        <div>
          <h1>Crear Tarea</h1>
        </div>
        <form className={styles.formContent}>
          <div>
            Título
            <input type="text" />
            Descripción
            <input type="text" />
            Fecha Límite
            <input type="date" />
          </div>
          <div className={styles.buttonCard}>
            <button className={styles.buttonCrearTarea}>Crear Tarea</button>
            <button className={styles.buttonCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
