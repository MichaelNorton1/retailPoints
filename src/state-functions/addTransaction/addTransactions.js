import pointCalculator from "../pointCalculator/pointCalculator.js";

const addTransactions = (threeMonths) => {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let finalUsers = {};
  threeMonths.forEach((transaction) => {
    transaction["points"] = pointCalculator(transaction.amountSpent);
    let month = transaction.date.split("-")[1];
    let id = transaction.id;

    if (finalUsers[id] !== undefined) {
      finalUsers[id].transactions.push({
        month: months[month - 1],
        points: transaction.points,
      });
      finalUsers[id].totalPoints += transaction.points;
      finalUsers[id].total.push(transaction);
    } else {
      finalUsers[transaction.id] = {
        name: transaction.name,
        totalPoints: transaction.points,
        transactions: [
          { month: months[month - 1], points: transaction.points },
        ],
        total: [transaction],
      };
    }
  });

  return finalUsers;
};

export default addTransactions;
