import moment from "moment";
const checkMonths = (tableData) => {
  const threeMonthsAgo = moment().subtract(3, "months");
  const threeMonths = tableData.transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);

    return transactionDate > threeMonthsAgo._d;
  });
  return threeMonths;
};

export default checkMonths;
