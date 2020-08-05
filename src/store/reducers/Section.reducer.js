import * as Actions from "../actions";

const initialState = {
  cards: [1, 2, 3],
};

const SectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_CARD_DATA: {
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

export default SectionReducer;
