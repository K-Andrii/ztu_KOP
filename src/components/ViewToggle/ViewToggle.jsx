import styles from "./ViewToggle.module.css";

export default function Toggle({ isDark, onToggle }) {
  return (
    <button className={styles.toggleBtn} onClick={onToggle}>
      {isDark ? "light mode" : "dark mode"}
    </button>
  );
}
