import formatData from "../state-functions/formatData/formatData";

test("expect final data to be an array of OBjects", () => {
  const input = {
    1: {
      name: "James",
      points: 320,
      transactions: [{ date: "2021-11-21", amountSpent: 120 }],
    },
  };
  const output = [
    {
      name: "James",
      id: "1",
      data: {
        name: "James",
        points: 320,

        transactions: [{ date: "2021-11-21", amountSpent: 120 }],
      },
    },
  ];
  expect(formatData(input)).toStrictEqual(output);
});
