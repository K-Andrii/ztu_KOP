import styles from "./CasesCounter.module.css";
import { useState } from "react";

export default function CasesCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Лічильник хворих</h3>
      <div className={styles.count}>{count}</div>
      <div className={styles.buttons}>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}>Скинути</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
