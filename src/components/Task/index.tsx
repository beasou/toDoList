import styles from "./index.module.css";
import { Circle,CheckCircle, Trash } from "phosphor-react";
export function Task() {
  return (
    <div className={styles.card}>
      <div className={styles.task}>
        <a className={styles.circle} href=""> <Circle /></a>
        <a className={styles.check} href=""><CheckCircle/></a>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <a className={styles.trash} href=""> <Trash/></a>
      </div>
    </div>
  );
}
