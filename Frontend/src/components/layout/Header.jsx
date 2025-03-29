import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

import { useUser } from "../../context/UserContext";

function Header() {
  const { user, setUser } = useUser();

  const handleOnLogout = () => {
    // 1. delete 'token' from the localStorage
    localStorage.removeItem("token");

    // 2. reset user object from the state
    setUser({});

    // 3. redirect user to the login page(achieved automatically by react-router)
  };

  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <MdDashboard /> Dashboard
                </Link>
                <Link className="nav-link" to="/transaction">
                  <GrTransaction /> Transaction
                </Link>
                <Link onClick={handleOnLogout} className="nav-link" to="/">
                  <MdLogout /> Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <IoCreateSharp /> Sign Up
                </Link>
                <Link className="nav-link" to="/">
                  <MdLogin /> Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
