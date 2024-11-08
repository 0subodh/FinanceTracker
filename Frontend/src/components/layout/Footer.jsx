import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div>
      <Container fluid className="bg-dark p-5">
        <Row className="text-center">
          <Col>&copy; Copyright all Reserved || Made by Subodh Adhikari</Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
