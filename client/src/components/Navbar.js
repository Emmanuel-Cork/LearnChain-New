import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/LearnChain.png";
import "../styles/Navbar.css";
import { UserContext } from "../UserContext";

const Navigation = () => {
  const { id, setID } = useContext(UserContext);
  const logout = () => {
    setID({ id: null, user: null });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> LearnChain
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {id.id === null ? (
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">
              <Button className="btn-primary">Login</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              <Button className="btn-primary">Signup</Button>
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/account-details">
              <Button className="btn-info">
                My Account
              </Button>
            </Nav.Link>
            {id.user === "student" ? (
              <Nav.Link as={Link} to="/student">
                <Button className="btn-info">
                  Student Panel
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/educator">
                <Button className="btn-info">
                  Educator Panel
                </Button>
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/">
              <Button className="btn-danger" onClick={logout}>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
