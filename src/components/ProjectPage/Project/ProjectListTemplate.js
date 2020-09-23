import React from 'react';

const ProjectListTemplate = ({ form, children }) => {
  return (
    <>
      <section>{form}</section>
      <section className="projects-wrapper">{children}</section>
    </>
  );
};

export default ProjectListTemplate;
