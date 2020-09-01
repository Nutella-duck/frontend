import React from "react";
import "./ProjectListTemplate.css";

const ProjectListTemplate = ({ form, children }) => {
  return (
    <>
      <section>{form}</section>
      <section className="projects-wrapper">{children}</section>
    </>
  );
};

export default ProjectListTemplate;
