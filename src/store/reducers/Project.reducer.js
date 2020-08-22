import * as Actions from "../actions";

const initialState = {
input:"",
projects: [
    { id: 0, name:'Nutella Project' ,},
    {id :1, name :'SW Maestro'},
    {id : 2, name:'Nutella Corder'}
   ,{ id: 0, name:'Nutella Project' },
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
      const {projects} = state;
      const project = {};
      project.id = 1;
      project.name = action.name;
      projects.concat(project);
        return {
          ...state,
          projects:projects.concat(project),
        }
    }
   

    default: {
      return state;
    }
  }
};

export default ProjectReducer;
