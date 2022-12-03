import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import axios from "axios";

export default function Navbar1 () {

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState('')

    if(localStorage.getItem('token') != null) {
        setLoggedIn(true)
        axios.get('http://127.0.0.1:8000/api/user/').then((res) => {
            setName(res.data.name)
        });
    }

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

              <Nav.Link href={ (loggedIn == true) ? "/profile" : "/login" }>{ (loggedIn == true) ? {name} : "Login"  }</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
