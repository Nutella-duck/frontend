import axios from "axios";

export const FETCH_ALL_PROJECT_DATA = "project/FETCH_ALL_PROJECT_DATA";
export const ADD_PROJECT = "project/ADD_PROJECT";

export const fetchAllProjectData = (projectData) => {
  return {
    type: FETCH_ALL_PROJECT_DATA,
    projectData,
  };
};

export const getAllPorject = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:7000/admin/project/`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data)
        console.log("hi")
        dispatch(fetchAllProjectData(response.data));
      })
      .catch((error) => {
        console.log("error read project");
        throw error;
      });
  };
};

export const addProject = (projectData) => {
  return (dispatch) => {
    console.log(projectData);
    return axios
      .post("http://localhost:7000/admin/project", {
        params: projectData,
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error add project");
        throw error;
      });
  };
};
