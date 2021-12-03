import pointCalculator from "../pointCalculator/pointCalculator.js";

const addTransactions = (threeMonths) => {
  threeMonths.forEach((transaction) => {
    transaction["points"] = pointCalculator(transaction.amountSpent);
  });

  let finalUsers = {};
  threeMonths.forEach((transaction) => {
    let id = transaction.id;
    if (finalUsers[id] !== undefined) {
      finalUsers[id].points += transaction.points;
      finalUsers[id].transactions.push(transaction);
    } else {
      finalUsers[transaction.id] = {
        name: transaction.name,
        points: transaction.points,
        transactions: [transaction],
      };
    }
  });

  return finalUsers;
};

export default addTransactions;
