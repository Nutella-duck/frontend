import React, { useState, useEffect } from "react";
import ProjectListTemplate from "./ProjectListTemplate";
import ProjectForm from "./ProjectForm";
import ProjectItemList from "./ProjectItemList";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../../store/actions";
import axios from "axios";

const Project = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.project.projects);

  const [apiKey, setApiKey] = useState("");
  const [inputs, setInputs] = useState({
    projectName: "",
    description: "",
  });

  const { projectName, description } = inputs;

  useEffect(() => {
    dispatch(Actions.getAllPorject(1));
  }, []);

  const getKey = () => {
    console.log("getkey");
    axios
      .get("http://localhost:7000/admin/project/key")
      .then((resonse) => {
        setApiKey(resonse.data);
      })
      .catch((error) => {
        console.log("error getKey");
      });
  };

  const handleCreate = () => {
    setInputs({
      projectName: "",
      description: "",
    });
    let projectInfoData = {
      projectName: inputs.projectName,
      description: inputs.description,
      api_key: apiKey,
    };

    dispatch(Actions.addProject(projectInfoData));

    state.push(projectInfoData);
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
            apiKey={apiKey}
            onChange={handleChange}
            onCreate={handleCreate}
            getKey={getKey}
          />
        }
      >
        <ProjectItemList projects={state} />
      </ProjectListTemplate>
    </>
  );
};
export default Project;
