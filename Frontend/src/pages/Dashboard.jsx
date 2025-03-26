import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard() {
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          TODO Dashboard
        </Col>
      </Row>
    </Container>
  );
}
