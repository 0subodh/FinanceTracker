import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../components/LoginForm";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

export default function SignUp() {
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center fs-1"
        >
          <BsGraphDownArrow />
          <div className="text-danger text-decoration-line-through">
            Reduce your Expenses!
          </div>
          <br />
          <div className="text-success text-through">
            <BsGraphUpArrow />
            Increase your Income!
          </div>
        </Col>
        <Col md={6}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}
