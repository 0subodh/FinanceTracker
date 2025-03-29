import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function Transaction() {
  const { getTransactions } = useUser();
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded">
        <Col>
          <TransactionForm />
          <hr />
          <TransactionTable />
        </Col>
      </Row>
    </Container>
  );
}
