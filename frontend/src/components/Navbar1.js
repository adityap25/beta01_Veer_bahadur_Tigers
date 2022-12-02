import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function Navbar1 () {

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src="" style={{ height: "40px", width: "auto" }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
            >
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Donate</Nav.Link>
              <Nav.Link href="/">List</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
