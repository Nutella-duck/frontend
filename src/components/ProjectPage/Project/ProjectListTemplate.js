import React from 'react';
import './ProjectListTemplate.css';
import { Container,Row,Col} from "react-bootstrap";
import { Route } from 'react-router-dom';
const ProjectListTemplate = ({form, children}) => {
  return (
      <Container>
      <Row>
        <Col sm={4}>
      <h2>Project</h2></Col>
      <Col >
      <section >
        {form}
      </section>
      </Col>
      </Row>
      <Row>
      <Col sm = {12} >
      <section className = "projects-wrapper">
        { children }
      </section>
      </Col>
      </Row>
    </Container>
  );
};

export default ProjectListTemplate;