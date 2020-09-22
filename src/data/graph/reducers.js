import * as Actions from './actionTypes';

const initialState = {
  graphData: [{ stepId: 1, runName: 'r1', stepNumber: 1, accuracy: 0.1 }],
  chartIndicators: ['accuracy', 'loss'],
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_GRAPH_SUCCESS: {
      console.log('겟 그래프');
      console.log('before graphData', state.graphData);
      console.log('payload', action.payload.graph);
      return { ...state, graphData: action.payload };
    }
    case Actions.GET_INDICATORS: {
      return { state };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
