import { useState } from "react";
import Modal from "../modal/Modal";
import "../rows/rows.css";
const Rows = ({ customers }) => {
  const [transactionHistory, setTransactionHistory] = useState(null);
  const [style, setStyle] = useState("hidden");

  const openModal = (customer) => {
    setTransactionHistory(customer);

    setStyle("modal");
  };
  return (
    <tbody>
      <Modal
        setStyle={setStyle}
        style={style}
        transactionHistory={transactionHistory}
      ></Modal>
      {customers.map((customer) => {
        return (
          <tr key={customer.id} className="rows">
            <td className="rows">{customer.name}</td>
            <td className="rows">
              {customer.data.transactions.length} {"  "}
              <button onClick={() => openModal(customer)}> Show All </button>
            </td>

            <td className="rows show">{customer.data.points}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
