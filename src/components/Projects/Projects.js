import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://1000logos.net/wp-content/uploads/2017/05/New-YouTube-logo.jpg"
              isBlog={false}
              title="youtube clone"
              description="just clone youtube with api"
              ghLink="https://noorgx.github.io/Youtube/"
              demoLink="https://noorgx.github.io/Youtube/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
