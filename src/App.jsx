import React, { useEffect, useState } from "react";
import "./App.css";
import checkMonths from "../src/state-functions/checkMonths/checkMonths";
import formatData from "./state-functions/formatData/formatData";
import tableData from "../src/data/customers.js";
import addTransactions from "../src/state-functions/addTransaction/addTransactions.js";
import Table from "../src/components/table/Table.jsx";
import getCustomers from "../src/state-functions/getCustomers/getCustomers.js";
function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    //simulating API call
    getCustomers(tableData)
      .then((res) => checkMonths(res))
      .then((threeMonths) => addTransactions(threeMonths))
      .then((finalUsers) => {
        const data = formatData(finalUsers);

        setCustomers(data);
      });
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "left" }}>Retail Points</h1>
      <Table className="top" customers={customers}></Table>
    </div>
  );
}

export default App;
