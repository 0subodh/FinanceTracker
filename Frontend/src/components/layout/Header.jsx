import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              <IoCreateSharp /> Sign Up
            </Link>
            <Link className="nav-link" to="/">
              <MdLogin /> Login
            </Link>
            <Link className="nav-link" to="/dashboard">
              <MdDashboard /> Dashboard
            </Link>
            <Link className="nav-link" to="/transaction">
              <GrTransaction /> Transaction
            </Link>
            <Link className="nav-link" to="/">
              <MdLogout /> Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
