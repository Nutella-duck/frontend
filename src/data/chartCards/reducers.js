import * as Actions from './actionTypes';

const initialState = {
  chartCardsName: ['accuracy', 'loss'],
  systemCardsName: ['GPU', 'CPU'],
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_SYSTEM_CARDS: {
      return { state };
    }
    case Actions.GET_CHART_CARDS: {
      return { state };
    }
    case Actions.ADD_SYSTEM_CARDS: {
      const { systemCardsName } = state;

      return {
        ...state,
        systemCardsName: [...systemCardsName, action.card],
      };
    }
    case Actions.ADD_CHART_CARD: {
      const { chartCardsName } = state;

      return {
        ...state,
        chartCardsName: [...chartCardsName, action.card],
      };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
