function getAngleRange(angle) {
  return ((angle + Math.PI) % (2 * Math.PI)) - Math.PI;
}

export default getAngleRange;
