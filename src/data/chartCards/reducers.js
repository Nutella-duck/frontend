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

      systemCardsName.push(action.card);
      console.log('b', action.card, systemCardsName);
      return {
        ...state,
        systemCardsName: systemCardsName,
      };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
