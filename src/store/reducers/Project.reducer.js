import * as Actions from "../actions";

const initialState = {
  input: "",
  projects: [

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
