function getAngleRange(angle) {
  return angle % (2 * Math.PI);
}

function getAngle(section) {
  return (section * Math.PI) / 4;
}

export { getAngleRange, getAngle };
