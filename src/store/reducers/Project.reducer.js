import * as Actions from "../actions";

const initialState = {
  input: "",
  projects: [
    { id: 0, name: "Nutella Project", description: "description" },
    { id: 1, name: "SW Maestro", description: "description" },
    { id: 2, name: "Nutella Corder", description: "description" },
    { id: 0, name: "Nutella Project", description: "description" },
    { id: 1, name: "SW Maestro", description: "description" },
    { id: 2, name: "Nutella Corder", description: "description" },
  ],
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_PROJECT_DATA: {
      return {
        ...state,
        projects: action.projectData,
      };
    }

    default: {
      return state;
    }
  }
};

export default ProjectReducer;
