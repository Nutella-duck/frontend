import * as Actions from "../actions";
const initialState = {

}


const SectionReducer = (state = "", action) => {
  switch (action.type) {
    case Actions.SEARCH_SPACE: {
      return {
        ...state,
        input:action.input
      };
    }

    default: {
      return state;
    }
  }
};

export default SectionReducer;
