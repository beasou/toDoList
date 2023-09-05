import styles from "./index.module.css";

export function TaskCounter() {
  return (
    <div className={styles.content}>
    <div className={styles.taskCounter}>
      <div className={styles.content}>
        <h1 className={styles.created}>Tarefas Criadas</h1>
        <p>0</p>
      </div>
      <div className={styles.content}>
        <h1 className={styles.completed} >Concluídas</h1>
        <p>0</p>
      </div>
    </div>
    </div>
  );
}
