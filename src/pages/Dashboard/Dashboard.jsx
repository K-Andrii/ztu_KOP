import { useState } from "react";
import CasesCounter from "../../components/CasesCounter/CasesCounter.jsx";
import CountryList from "../../components/CountryList/CountryList.jsx";
import ViewToggle from "../../components/ViewToggle/ViewToggle.jsx";
import KpiCard from "../../components/KpiCard/KpiCard.jsx";
import { globalStats } from "../../helpers/mockData.js";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [themeIsBlack, setThemeIsBlack] = useState(false);

  function toggleTheme() {
    setThemeIsBlack(!themeIsBlack);
  }

  return (
    <div className={styles.dashboardWrapper}>
      <h1>Епідемстатистика Dashboard</h1>

      <ViewToggle isDark={themeIsBlack} onToggle={toggleTheme} />
      <div
        className={`${styles.kpiSection} ${themeIsBlack ? styles.darkTheme : styles.lightTheme}`}
      >
        <KpiCard
          title="Усього випадків"
          value={globalStats.cases}
          trend={globalStats.casesTrend}
        />
        <KpiCard
          title="Одужань"
          value={globalStats.recovered}
          trend={globalStats.recoveredTrend}
        />
        <KpiCard
          title="Смертей"
          value={globalStats.deaths}
          trend={globalStats.deathsTrend}
        />
      </div>

      <div className={styles.widgetsGrid}>
        <CountryList />
        <CasesCounter />
      </div>
    </div>
  );
}
