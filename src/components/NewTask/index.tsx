import styles from "./index.module.css";
import { PlusCircle } from "phosphor-react";

export function Newtask(){
    return(
        <div className={styles.newtask}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
            />
            <button>Criar<PlusCircle/></button>
        </div>
    )
}