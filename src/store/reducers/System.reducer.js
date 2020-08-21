import * as Actions from "../actions";

const initialState = {
  cards: [1],
};

const SystemReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SYSTEM_CARD: {
      return {
        ...state,
        cards: action.card,
      };
    }

    default: {
      return state;
    }
  }
};

export default SystemReducer;
