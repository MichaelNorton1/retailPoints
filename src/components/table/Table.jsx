import Rows from "../rows/Rows";
import "../table/table.css";
const Table = ({ customers }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="columns">Name</th>

            <th className="columns">Number of Transactions</th>
            <th className="columns"> Total Points</th>
          </tr>
        </thead>

        <Rows customers={customers}></Rows>
      </table>{" "}
    </>
  );
};

export default Table;
