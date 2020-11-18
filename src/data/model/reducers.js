import * as Actions from './actionTypes';

const initialState = {
  totalRun: [{ total_run: '0' }],
  index: 8,
  graphData: [{ stepId: 1, runName: 'r1', stepNumber: 1, accuracy: 0.1 }],
  chartIndicators: ['accuracy', 'loss'],
  isGraphLoading: true,
  selectedModel: [],
  models: [],
  graph2Data: [],
  indicatorCard: [],
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
    // case Actions.FETCH_GRAPH_DATA: {
    //   // state.graphData.unshift (action.graphData)
    //   // var data = [];
    //   // data = action.graphData.map((a) => a.accuracy);
    //   // state.graphData.unshift(data);
    //   // return {
    //   //   ...state,
    //   //   isGraphLoading: true,

    //   //   // graphData:state.graphData.concat(data)
    //   // };
    //   const { graphData } = state;
    //   return {
    //     ...state,
    //     graphData: action.graphData,
    //   };
    // }
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
      console.log('payload', action.payload);
      return { ...state, graphData: action.payload, isGraphLoading: false };
    }
    case Actions.GET_GRAPH2_SUCCESS: {
      const indicators = Object.keys(
        JSON.parse(action.payload[0][0].indicator),
      );
      console.log('payload2', action.payload, indicators);

      return {
        ...state,
        graph2Data: action.payload,
        isGraphLoading: false,
        indicatorCard: indicators,
      };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
