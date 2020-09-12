import * as Actions from "../actions";

const initialState = {
  input: "",
  // title:"titlereduce",
  projects: [
    {
      "projectId": 10,
      "projectName": "pj10",
      "description": null,
      "privacy": null,
      "created_at": "2020-09-11T10:22:43.000Z",
      "totalRun": 3
    },
    // {
    //   "projectId": 2,
    //   "projectName": "pj2",
    //   "description": null,
    //   "privacy": null,
    //   "created_at": "2020-09-11T10:22:43.000Z",
    //   "totalRun": 0
    // },
    // {
    //   "projectId": 3,
    //   "projectName": "pj3",
    //   "description": null,
    //   "privacy": null,
    //   "created_at": "2020-09-11T10:22:43.000Z",
    //   "totalRun": 0
    // }
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
    // case Actions.SELECT_POJECT:{
    //   const title = state.projects.find(v=>v.projectId===Number(action.projectId))
    //   console.log("titlereducer",title)
    //   return {
    //     ...state,
    //     title
    //   }
    // }
    default: {
      return state;
    }
  }
};

export default ProjectReducer;
