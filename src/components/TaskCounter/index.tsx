import styles from "./index.module.css";

export function TaskCounter() {
  return (
    <div className={styles.content}>
      <div className={styles.taskCounter}>
        <div className={styles.created}>
          <h1>Tarefas Criadas</h1>
          <p>0</p>
        </div>
        <div className={styles.completed}>
          <h1>Concluídas</h1>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
