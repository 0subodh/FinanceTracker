import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../components/LoginForm";

export default function SignUp() {
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded">
        <Col>
          <LoginForm />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>You are Welcome!</div>
        </Col>
      </Row>
    </Container>
  );
}
