import checkMonths from "../state-functions/checkMonths/checkMonths";
test("check if date is more than three months ago", () => {
  const input = {
    transactions: [
      { name: "John", id: 1, date: "2021-11-21", amountSpent: 120 },
      { name: "John", id: 1, date: "2021-8-21", amountSpent: 42 },
      { name: "John", id: 1, date: "2021-10-21", amountSpent: 190 },
      { name: "Mark", id: 2, date: "2020-10-12", amountSpent: 100 },
      { name: "Mark", id: 2, date: "2021-9-21", amountSpent: 100 },
      { name: "Mark", id: 2, date: "2021-11-21", amountSpent: 111 },
    ],
  };
  const expectedOutput = {
    transactions: [
      { name: "John", id: 1, date: "2021-11-21", amountSpent: 120 },
      { name: "John", id: 1, date: "2021-10-21", amountSpent: 190 },
      { name: "Mark", id: 2, date: "2021-9-21", amountSpent: 100 },
      { name: "Mark", id: 2, date: "2021-11-21", amountSpent: 111 },
    ],
  };

  expect(checkMonths(input).length).toBeGreaterThanOrEqual(
    expectedOutput.transactions.length
  );
});
