export const PROJECT_DATA = "project/PROJECT_DATA";
export const ADD_PROJECT ="project/ADD_PROJECT";
export const projectData = () => {
  return { type: PROJECT_DATA };
};
export const addProject = (input) => {
  return { type: ADD_PROJECT ,projects:{name:input}};
};


