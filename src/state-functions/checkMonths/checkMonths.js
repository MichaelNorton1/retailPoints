import moment from "moment";
const checkMonths = (tableData) => {
  const threeMonthsAgo = moment().subtract(3, "months");
  const threeMonthsRange = tableData.transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);

    return transactionDate > threeMonthsAgo._d;
  });
  return threeMonthsRange;
};

export default checkMonths;
