import React from "react";
import { Container, Row } from "react-bootstrap";

const Content = () => {
  return (
    <Container>
      <Row className="mt-2">
        <h2>ABOUT MYSELF</h2>
      </Row>
      <Row>
        <p>
          I want to start my career as a MERN stack developer and after having
          some experience, I want to see myself as a full stack developer by
          adding React Native to my skillset.
        </p>
      </Row>
      <Row id="career" className="mt-2">
        <h3>EDUCATION</h3>
      </Row>
      <Row id="career" className="m-2">
        <ul>
          <li>
            Bachelor of Computer Science - Paf-Kiet. Duration (2016 - May 2020)
          </li>
          <li>
            Intermediate (Pre-Eng.) - Govt. Degree College Malir Cantt. Duration
            (2012 - 2015)
          </li>
          <li>
            Matriculation - White House English school. Duration (2010 - 2012)
          </li>
        </ul>
      </Row>
      <Row id="career" className="mt-2">
        <h3>PROFESSIONAL SKILLS</h3>
      </Row>
      <Row id="career" className="m-2">
        <ul>
          <li>Javascript.</li>
          <li> React Js.</li>
          <li> Node Js.</li>
          <li> Express Js.</li>
          <li> Mongo Db.</li>
          <li> Html/Css.</li>
        </ul>
      </Row>

      <Row id="career" className="mt-2">
        <h3>PROJECTS</h3>
        <Row id="career" className="m-2">
          <ul>
            <li>
              CRUD APP - Using MERN.
              <p>I have built a test CRUD app and used following features.</p>
              <ul>
                <li>Bootstrap.</li>
                <li>React Router.</li>
                <li>Rest Api's.</li>
                <li>Json Web Tokens.</li>
              </ul>
              <p>
                P.S: I am continuously updating the application with modern and
                best practices as I learn new things.
              </p>
            </li>
            <li> Gaming Web Application - Using MERN</li>
            <p>
              I am currently working on our own product and implementing all
              features which I learned with MERN and are needed in this
              application.
            </p>
          </ul>
        </Row>
      </Row>
      <Row id="career">
        <h3>Language Competencies</h3>
      </Row>
      <Row id="career" className="m-2">
        <ul>
          <li> Urdu: Native language.</li>
          <li> English: Intermediate (speaking, reading); basic (writing)</li>
        </ul>
      </Row>
    </Container>
  );
};

export default Content;
