import React from "react";
import { Container } from "react-bootstrap";

import bannerImage from "../assets/bannerImage.jpg";
import "../App.css";

const BannerImage = () => {
  return (
    <Container fluid>
      <img id="banner" src={bannerImage} alt="Banner" />
    </Container>
  );
};

export default BannerImage;
