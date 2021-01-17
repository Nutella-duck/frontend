import { projectSuccess } from './actions';
import * as Actions from './actionTypes';

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
    case Actions.PROJECT_SUCCESS:
     
      return action.payload;
    case Actions.PROJECT_FAIL:
      return state;
    
    default: {
      return state;
    }
  }
};
export default ProjectReducer;