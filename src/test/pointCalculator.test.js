import pointCalculator from "../state-functions/pointCalculator/pointCalculator";
describe("2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction", () => {
  test("calculate an interger based on above", () => {
    const input = 120;
    const output = 90;

    expect(pointCalculator(input)).toEqual(output);
  });
});
