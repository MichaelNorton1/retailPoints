import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ history, style, setStyle }) => {
  const handleClose = () => {
    setStyle("hidden");
  };

  if (style === "hidden") {
    return null;
  }
  return createPortal(
    <>
      <div className="back"></div>
      <div className={style}>
        <div className="content">
          <div className="header">
            <h4 className="title">{history.name}</h4>
          </div>
          {history.data.transactions.map((each, key) => {
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
