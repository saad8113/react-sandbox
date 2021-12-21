import React from "react";
import { Container } from "react-bootstrap";

import bannerImage from "../assets/bannerImage1.jpg";
import "../App.css";

const BannerImage = () => {
  return (
    <Container>
      <img id="banner" src={bannerImage} alt="Banner" />
    </Container>
  );
};

export default BannerImage;
