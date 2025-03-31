import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function TransactionTable() {
  const [displayTransactions, setDisplayTransactions] = useState([]);
  const { transactions } = useUser();

  useEffect(() => {
    setDisplayTransactions(transactions);
  }, [transactions]);

  const handleOnSearch = (e) => {
    const value = e.target.value;
    const filteredTransactions = transactions.filter((t) =>
      t.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayTransactions(filteredTransactions);
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>{displayTransactions.length} Transaction(s) Found</div>
        <div>
          <Form.Control type="text" onChange={handleOnSearch} />
        </div>
        <div>
          <Button>
            <FaPlusCircle /> Add New Transaction
          </Button>
        </div>
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expense</th>
            <th>Income</th>
          </tr>
        </thead>

        <tbody>
          {displayTransactions.map((t, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{t.date.slice(0, 10)}</td>
                <td>{t.title}</td>
                <td className="text-danger">
                  {t.type === "expense" ? t.amount : ""}
                </td>
                <td className="text-success">
                  {t.type === "income" ? t.amount : ""}
                </td>
              </tr>
            );
          })}

          <tr className="fw-bold text-center">
            <td colSpan={3}>Total Balance</td>
            <td colSpan={2}>
              ${" "}
              {displayTransactions
                .reduce(
                  (acc, t) =>
                    t.type === "expense" ? acc - t.amount : acc + t.amount,
                  0
                )
                .toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TransactionTable;
