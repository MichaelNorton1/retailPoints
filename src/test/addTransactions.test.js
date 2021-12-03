import addTransactions from "../state-functions/addTransaction/addTransactions";
test("returns a key value pair in the return object", () => {
  const input = [
    { name: "John", id: 1, date: "2021-11-21", amountSpent: 120 },
    { name: "John", id: 1, date: "2021-10-21", amountSpent: 190 },
    { name: "Mark", id: 2, date: "2021-9-21", amountSpent: 100 },
    { name: "Mark", id: 2, date: "2021-11-21", amountSpent: 111 },
  ];

  expect(addTransactions(input)[2].points).toEqual(72);
  expect(addTransactions(input)[1].points).toEqual(320);
});
