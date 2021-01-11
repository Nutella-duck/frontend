import * as Actions from './actionTypes';

const initialState = {
  // title:"titlereduce",
  hpoData: [
    {
      name: 'hpo1',
      state: 'running',
      created: 35000,
      computedTime: '1hours',
      runCount: 115,
      createdBy: 'leehaein',
    },
    {
      computedTime: '1hours',
      created: 35000,
      createdBy: 'leehaein',
      name: 'dfwe',
      runCount: 100,
      state: 'gewg',
    },
    {
      name: 'hpo1',
      state: 'running',
      created: 35000,
      computedTime: '1hours',
      runCount: 115,
      createdBy: 'leehaein',
    },
    {
      name: 'hpo1',
      state: 'running',
      created: 35000,
      computedTime: '1hours',
      runCount: 115,
      createdBy: 'leehaein',
    },
  ],
  hpoConfig: [],
  hpoImportance: [],
  best: {},
};

const HpoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_HPO_DATA: {
      return {
        ...state,
        hpoData: action.hpoData,
      };
    }
    case Actions.FETCH_ALL_HPO_CONFIG: {
      return {
        ...state,
        hpoConfig: action.hpoConfig,
      };
    }
    case Actions.FETCH_ALL_HPO_IMPORTANCE: {
      return {
        ...state,
        hpoImportance: action.hpoImportance,
      };
    }
    case Actions.FETCH_GET_BEST_PARAMETER: {
      return {
        ...state,
        best: action.best,
      };
    }
    case Actions.ADD_HPO_DATA: {
      const current = action.hpoData;

      console.log(current);
      return {
        ...state,
        hpoData: [...state.hpoData, action.hpoData],
      };
    }
    case Actions.ADD_HPO_CONFIG: {
      const current = action.hpoConfig;

      console.log(current);
      return {
        ...state,
        hpoConfig: [...state.hpoConfig, action.hpoConfig],
      };
    }
    default: {
      return state;
    }
  }
};
export default HpoReducer;
