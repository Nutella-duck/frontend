import * as Actions from '../actions';

const initialState = {
  input: '',

  projects: [
    {
      projectId: 10,
      projectName: 'pj10',
      description: null,
      privacy: null,
      created_at: '2020-09-11T10:22:43.000Z',
      totalRun: 3,
    },
    {
      projectId: 10,
      projectName: 'pj10',
      description: null,
      privacy: null,
      created_at: '2020-09-11T10:22:43.000Z',
      totalRun: 3,
    },
    {
      projectId: 10,
      projectName: 'pj10',
      description: null,
      privacy: null,
      created_at: '2020-09-11T10:22:43.000Z',
      totalRun: 3,
    },
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
