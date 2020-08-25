import React, { useState } from "react";
import ProjectListTemplate from "./ProjectListTemplate";
import ProjectForm from "./ProjectForm";
import ProjectItemList from "./ProjectItemList";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../../store/actions";
const Project = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.project.projects);

  const [inputs, setInputs] = useState({
    projectName: "",
    description: "",
  });

  const { projectName, description } = inputs;
  const handleCreate = () => {
    setInputs({
      projectName: "",
      description: "",
    });
    dispatch(Actions.addProject(inputs.projectName, inputs.description));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <ProjectListTemplate
        form={
          <ProjectForm
            projectName={projectName}
            description={description}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <ProjectItemList projects={state} />
      </ProjectListTemplate>
    </>
  );
};
export default Project;
