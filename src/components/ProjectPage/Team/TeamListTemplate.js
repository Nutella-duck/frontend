import React from 'react';

import { Container,Row,Col} from "react-bootstrap";
import { Route } from 'react-router-dom';
const TeamListTemplate = ({form, children}) => {
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

export default TeamListTemplate;