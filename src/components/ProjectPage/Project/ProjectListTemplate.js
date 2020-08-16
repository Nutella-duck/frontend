import React from 'react';
import './ProjectListTemplate.css';
import { Container,Row,Col} from "react-bootstrap";
import { Route } from 'react-router-dom';
const ProjectListTemplate = ({form, children}) => {
  return (
      
        <>
      <section >
        {form}
      </section>
     
      <section className = "projects-wrapper">
        { children }
      </section>
      </>

  
  );
};

export default ProjectListTemplate;