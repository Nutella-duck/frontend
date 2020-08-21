import * as Actions from "../actions";

const initialState = {
input:"",
projects: [
    { id: 0, name:'Nutella Project' },
    {id :1, name :'SW Maestro'},
    {id : 2, name:'Nutella Corder'}
   
  ]
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PROJECT_DATA: {
      return {
        ...state.projects
        
      };
    }
    case Actions.ADD_PROJECT:{
        return {
           ...state.projects,
           
            
         
        }
    }
   

    default: {
      return state;
    }
  }
};

export default ProjectReducer;
