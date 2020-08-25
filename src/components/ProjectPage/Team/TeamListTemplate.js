import React from 'react';


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