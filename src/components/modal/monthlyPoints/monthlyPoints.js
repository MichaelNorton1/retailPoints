const monthlyPoints = (transactionHistory) => {
  let monthlyCount = {};
  transactionHistory.data.transactions.forEach((month) => {
    if (monthlyCount[month.month] === undefined) {
      monthlyCount[month.month] = month.points;
    } else {
      monthlyCount[month.month] += month.points;
    }
  });

  return Object.keys(monthlyCount).map((month, i) => {
    console.log(month);
    return (
      <div
        style={{ border: "1px solid", margin: "3px", padding: "2px" }}
      >{`${month}: ${monthlyCount[month]} points`}</div>
    );
  });
};

export default monthlyPoints;
