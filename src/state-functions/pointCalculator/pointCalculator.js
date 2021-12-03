const pointCalculator = (trans) => {
  let points = 0;
  if (trans > 50 && trans < 100) {
    points += trans - 50;
  } else if (trans > 100) {
    points = (trans - 100) * 2 + 50;
  } else {
    return 0;
  }

  return Math.floor(points);
};
export default pointCalculator;
