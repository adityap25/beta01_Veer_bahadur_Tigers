import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import axios from "axios";

export default function Navbar1 () {

  

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            Ishan Mujumdar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
            >
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/donate">Donate</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link href={(localStorage.getItem('name') == null) ? '/login' : '/profile'}>{(localStorage.getItem('name') == null) ? 'Login' : localStorage.getItem('name')}</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};