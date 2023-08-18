import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiAzuredevops
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTailwindcss />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAzuredevops />
        </Col>
    </Row>
  );
}

export default Toolstack;
