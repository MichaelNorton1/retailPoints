import { createPortal } from "react-dom";
import "./modal.css";
import monthlyPoints from "./monthlyPoints/monthlyPoints.js";
const Modal = ({ transactionHistory, style, setStyle }) => {
  const handleClose = () => {
    setStyle("hidden");
  };

  if (style === "hidden") {
    return null;
  }

  const months = monthlyPoints(transactionHistory);

  return createPortal(
    <>
      <div className="back"></div>
      <div className={style}>
        <div className="content">
          <div className="header">
            <h4 className="title">{transactionHistory.name}</h4>
          </div>
          <div className="body">Months: {months}</div>
          <h3>All Transactions</h3>
          {transactionHistory.data.total.map((each, key) => {
            return (
              <div
                key={key}
                className="body"
              >{`Amount: $${each.amountSpent},  Day: ${each.date}, Points: ${each.points}`}</div>
            );
          })}

          <div className="footer">
            <button className="button " onClick={() => handleClose()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
