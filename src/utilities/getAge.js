function getAge(date) {
  const NUM_STR = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const age_ms = new Date().getTime() - date;
  const years_into_twenties =
    Math.floor(age_ms / (1000 * 60 * 60 * 24 * 365.24237)) - 20;
  return `twenty ${NUM_STR[years_into_twenties]}${
    years_into_twenties === 0 ? "" : " "
  }`;
}
export default getAge;
