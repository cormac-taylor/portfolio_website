const NUM_STR = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

function getAge(date) {
  const age_ms = new Date().getTime() - date;
  const years_into_twenties =
    Math.floor(age_ms / (1000 * 60 * 60 * 24 * 365.24237)) - 20;
  return `twenty ${NUM_STR[years_into_twenties].toLowerCase()}${
    years_into_twenties === 0 ? "" : " "
  }`;
}

function getYears(date) {
  const years_ms = new Date().getTime() - new Date(date);
  const years =
    Math.floor(years_ms / (1000 * 60 * 60 * 24 * 365.24237));
  return NUM_STR[years];
}

export { getAge, getYears };
