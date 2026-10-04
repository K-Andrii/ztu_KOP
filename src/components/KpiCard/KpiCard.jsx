import styles from "./KpiCard.module.css";

export default function KpiCard({ title, value, trend }) {
  return (
    <div className="card">
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
      <p className={styles.trend}>{trend}</p>
    </div>
  );
}
