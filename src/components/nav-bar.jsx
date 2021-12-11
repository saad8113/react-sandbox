import React from "react";
import { Navbar, Container } from "react-bootstrap";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
