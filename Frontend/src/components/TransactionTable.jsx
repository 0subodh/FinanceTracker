import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";

function TransactionTable() {
  const { transactions } = useUser();
  console.log(transactions);
  return (
    <Table striped bordered hover>
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
        {transactions.map((t, index) => {
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
            {transactions
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
  );
}

export default TransactionTable;
