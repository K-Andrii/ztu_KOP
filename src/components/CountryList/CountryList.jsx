import { useState } from "react";
import { continents, countriesData } from "../../helpers/mockData.js";
import styles from "./CountryList.module.css";

export default function CountryList() {
  const [filter, setFilter] = useState("All");

  const filteredArr =
    filter === "All"
      ? countriesData
      : countriesData.filter((country) => country.continent === filter);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        value={filter}
        onChange={handleFilterChange}
      >
        {continents.map((cont) => (
          <option key={cont} value={cont}>
            {cont}
          </option>
        ))}
      </select>

      <ul className={styles.list}>
        {filteredArr.map((country) => (
          <li key={country.id} className={styles.listItem}>
            <span>{country.country}</span>
            <span>{country.cases} хворих</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
