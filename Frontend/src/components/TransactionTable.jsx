import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { deleteTransactions } from "../helper/axiosHelper.js";
import { toast } from "react-toastify";

function TransactionTable() {
  const [displayTransactions, setDisplayTransactions] = useState([]);
  const { transactions, toggleModal, getTransacations } = useUser();
  const [idsToDelete, setIdsToDelete] = useState([]);

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

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (value === "all") {
      checked
        ? setIdsToDelete(transactions.map((t) => t._id))
        : setIdsToDelete([]);
      return;
    }
    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      setIdsToDelete(idsToDelete.filter((id) => id !== value));
    }
  };

  const handleOnDelete = async () => {
    if (confirm("Are you sure you want to delete these transactions?")) {
      const pending = deleteTransactions(idsToDelete);
      toast.promise(pending, {
        pending: "Please wait..",
      });
      const { status, message } = await pending;
      toast[status](message);
      if (status === "success") {
        getTransacations();
        setIdsToDelete([]);
      }
    }
  };

  console.log(idsToDelete);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>{displayTransactions.length} Transaction(s) Found</div>
        <div>
          <Form.Control type="text" onChange={handleOnSearch} />
        </div>
        <div>
          <Button onClick={() => toggleModal(true)}>
            <FaPlusCircle /> Add New Transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select All Transactions"
          value="all"
          onChange={handleOnSelect}
          checked={idsToDelete.length === transactions.length}
        />
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
              <tr key={t._id}>
                <td>{index + 1}</td>
                <td>
                  <Form.Check
                    label={t.date.slice(0, 10)}
                    value={t._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(t._id)}
                  />
                </td>
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
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete {idsToDelete.length} Transaction(s)
          </Button>
        </div>
      )}
    </>
  );
}

export default TransactionTable;
