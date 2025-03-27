import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.backlogButton}>
        Backlog
        <span className={`material-symbols-outlined ${styles.backlogIcon}`}>
          import_contacts
        </span>
      </button>
      <div className={styles.containerListSprints}>
        <h3>
          Lista de Sprints
          <button className={styles.buttonAddSprint}>
            <span className="material-symbols-outlined">playlist_add</span>
          </button>
        </h3>

        <hr />
        <div className={styles.containerSprints}>
          <h4>Sprint Prueba</h4>
          <p>Inicio: 2025-03-04</p>
          <p>Cierre: 2025-03-11</p>
          <div className={styles.buttons}>
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
        </div>
      </div>
    </aside>
  );
};
