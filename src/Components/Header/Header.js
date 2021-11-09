import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Images/4Fun-logo.png";
import "./Header.css";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar expand="lg" fixed="top" className=" header"> 
      <Container>
        <Navbar.Brand to="/home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Fun Travels
        </Navbar.Brand>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/myorders">
              My Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          {user.email ? (
            <Button onClick={logout} variant="danger">
              LogOut
            </Button>
          ) : (
            <NavLink to="/login">
              <button className="sign-in-button">Login</button>
            </NavLink>
          )}

          <Navbar.Text>Signed in as: {user.displayName}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
