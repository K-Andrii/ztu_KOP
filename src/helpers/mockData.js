// KPI (ЛР1)
export const globalStats = {
  cases: 675000000,
  recovered: 650000000,
  deaths: 6800000,
  casesTrend: "+1.2%",
  recoveredTrend: "+1.5%",
  deathsTrend: "+0.1%",
};

//країни і фільтрація (ЛР1, ЛР2)
export const countriesData = [
  {
    id: "UKR",
    country: "Ukraine",
    cases: 5500000,
    recovered: 5400000,
    deaths: 112000,
    continent: "Europe",
  },
  {
    id: "USA",
    country: "USA",
    cases: 103000000,
    recovered: 99000000,
    deaths: 1120000,
    continent: "North America",
  },
  {
    id: "JPN",
    country: "Japan",
    cases: 33000000,
    recovered: 32000000,
    deaths: 74000,
    continent: "Asia",
  },
  {
    id: "POL",
    country: "Poland",
    cases: 6500000,
    recovered: 6300000,
    deaths: 119000,
    continent: "Europe",
  },
  {
    id: "BRA",
    country: "Brazil",
    cases: 37000000,
    recovered: 36000000,
    deaths: 700000,
    continent: "South America",
  },
];

// Категорії для фільтра (ЛР1)
export const continents = [
  "All",
  "Europe",
  "North America",
  "Asia",
  "South America",
];
