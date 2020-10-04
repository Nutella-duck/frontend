import * as Actions from './actionTypes';

const initialState = {
  totalRun: [{ total_run: '0' }],
  index: 8,
  graphData: [{ stepId: 1, runName: 'r1', stepNumber: 1, accuracy: 0.1 }],
  chartIndicators: ['accuracy', 'loss'],
  isGraphLoading: true,
  selectedModel: [],
  models: [
    {
      NAME: 'project_test',
      PROJECT: 'projectStudy',
      STATE: 'Finshed',
      CREATED: '1 m ago',
      CREATEDBY: '이해인',
      RUNTIME: '20 minute',
      ACCURACY: '0.3993',
      LOSS: '2.8553',
      VAL_ACCURACY: '0.5333',
      EPOCH: '50',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-002',
      PROJECT: 'NutellaCoder',
      STATE: 'Crashed',
      CREATED: '3 m ago',
      CREATEDBY: '이해인',
      RUNTIME: '10 minute',
      ACCURACY: '0.5609',
      LOSS: '1.2758',
      VAL_ACCURACY: '0.5333',
      EPOCH: '30',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-003',
      PROJECT: 'NutellaCoder',
      STATE: 'Finished',
      CREATED: '8 min ago',
      CREATEDBY: '이해인',
      RUNTIME: '15 minute',
      ACCURACY: '0.6718',
      LOSS: '1.0030',
      VAL_ACCURACY: '0.7152',
      EPOCH: '35',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-004',
      PROJECT: 'NutellaCoder',
      STATE: 'Crashed',
      CREATED: '3 m ago',
      CREATEDBY: '이해인',
      RUNTIME: '3 minute',
      ACCURACY: '0.711',
      LOSS: '0.8505',
      VAL_ACCURACY: '0.7438',
      EPOCH: '10',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-005',
      PROJECT: 'NutellaCoder',
      STATE: 'Finished',
      CREATED: '8 hours ago',
      CREATEDBY: '이해인',
      RUNTIME: '20 minute',
      ACCURACY: '0.7388',
      LOSS: '0.7329',
      VAL_ACCURACY: '0.7645',
      EPOCH: '25',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-005',
      PROJECT: 'NutellaCoder',
      STATE: 'Finished',
      CREATED: '8 hours ago',
      CREATEDBY: '이해인',
      RUNTIME: '23 minute',
      ACCURACY: '0.7511',
      LOSS: '0.6694',
      VAL_ACCURACY: '0.7603',
      EPOCH: '27',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-005',
      PROJECT: 'NutellaCoder',
      STATE: 'Finished',
      CREATED: '8 hours ago',
      CREATEDBY: '이해인',
      RUNTIME: '30 minute',
      ACCURACY: '0.7619',
      LOSS: '0.6172',
      VAL_ACCURACY: '0.7720',
      EPOCH: '35',
      runName: 'run1',
    },
    {
      NAME: 'Model-Name-A-005',
      PROJECT: 'NutellaCoder',
      STATE: 'Finished',
      CREATED: '8 hours ago',
      CREATEDBY: '이해인',
      RUNTIME: '35 minute',
      ACCURACY: '0.7704',
      LOSS: '0.5701',
      VAL_ACCURACY: '0.7830',
      EPOCH: '37',
      runName: 'run1',
    },
  ],
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_MODEL: {
      const { models } = state;
      const model = {};
      model.id = 1;
      model.name = action.name;
      models.concat(model);
      return {
        ...state,
        models: models.concat(model),
      };
    }
    case Actions.GET_INDICATORS: {
      return { state };
    }
    case Actions.GET_SELECTED_MODEL: {
      return { state };
    }
    case Actions.FETCH_ALL_MODEL_DATA: {
      return {
        ...state,
        models: action.modelData,
      };
    }
    case Actions.FETCH_NUMBER_OF_MODEL: {
      return {
        ...state,
        totalRun: action.totalRun,
      };
    }
    case Actions.FETCH_GRAPH_DATA: {
      // state.graphData.unshift (action.graphData)
      var data = [];
      data = action.graphData.map((a) => a.accuracy);
      state.graphData.unshift(data);
      return {
        ...state,
        isGraphLoading: true,

        // graphData:state.graphData.concat(data)
      };
    }
    case Actions.FETCH_SELECTED_MODEL: {
      const { selectedModel } = state;
      return {
        ...state,
        selectedModel: action.selectedModel,
      };
    }

    case '@Model/GET_MODEL_SUCCESS': {
      return {
        ...state,
        totalRun: action.payload.totalRun,
        models: action.payload.models,
      };
    }
    case Actions.GET_GRAPH_SUCCESS: {
      return { ...state, graphData: action.payload, isGraphLoading: false };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
