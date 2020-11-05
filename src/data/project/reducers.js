import { checkoutSuccess } from './actions';
import * as Actions from './actionTypes';

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
    {
      "projectId": 10,
      "projectName": "pj10",
      "description": null,
      "privacy": null,
      "created_at": "2020-09-11T10:22:43.000Z",
      "totalRun": 3
    }, {
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

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case AT.GET_PRODUCT_DETAIL_SUCCESS:
//       return payload;
//     case AT.GET_PRODUCT_DETAIL_FAIL:
//       return state;
//     default:
//       return state;
//   }
// };
const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_PROJECT_DATA: {
    
      return {
        ...state,
        projects: action.projectData,
      };
    }
    case Actions.CHECKOUT_SUCCESS:
      console.log(
        "checkoutSuccess",checkoutSuccess);
      return action.payload;
    case Actions.CHECKOUT_FAIL:
      return state;
    
    default: {
      return state;
    }
  }
};
export default ProjectReducer;