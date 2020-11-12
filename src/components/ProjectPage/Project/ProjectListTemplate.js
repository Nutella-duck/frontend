import React from 'react';

const ProjectListTemplate = ({ form, children }) => {
  return (
    <div>
      <section>{form}</section>
      <section className="projects-wrapper">{children}</section>
    </div>
  );
};

export default ProjectListTemplate;
