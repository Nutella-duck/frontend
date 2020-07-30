import React from 'react';
import './ProjectListTemplate.css';
import { Container,Row,Col} from "react-bootstrap";
import { Route } from 'react-router-dom';
const ProjectListTemplate = ({form, children}) => {
  return (
      <Container>
      <Row>
        <Col md={4}>
      <h2>Project</h2></Col>
      <Col md={{ span: 4, offset: 4 }}>
      <section >
        {form}
      </section>
      </Col>
      </Row>
      <Row>
      <Col >
      <section className = "projects-wrapper">
        { children }
      </section>
      </Col>
      </Row>
    </Container>
  );
};

export default ProjectListTemplate;