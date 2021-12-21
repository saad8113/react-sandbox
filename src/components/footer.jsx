import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Col>
          <p>0311-0265410</p>
        </Col>
        <Col>
          <p>Mc-69, Street no.2, Green town, Karachi</p>
        </Col>
        <Col>
          <p>saad23december@gmail.com</p>
        </Col>
        <Col>
          <p>www.linkedin.com/in/Saad-UR-Rehman23</p>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
