import getCustomers from "../state-functions/getCustomers/getCustomers";
import tableDate from "../data/customers";
test("awaiting test data", () => {
  return getCustomers(tableDate).then((data) => {
    expect(data).toBeDefined();
  });
  //
});
