function getAge(date) {
  const age_ms = new Date().getTime() - date;
  return Math.floor(age_ms / (1000 * 60 * 60 * 24 * 365.24237));
}

export default getAge;
