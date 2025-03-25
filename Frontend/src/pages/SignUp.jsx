import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FinancialTips from "../components/FinancialTips";
import SignupForm from "../components/SignupForm";

export default function SignUp() {
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <FinancialTips />
        </Col>
        <Col md={6}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}
