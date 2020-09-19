import * as AT from './actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AT.GET_PRODUCT_DETAIL_SUCCESS:
      return payload;
    case AT.GET_PRODUCT_DETAIL_FAIL:
      return state;
    default:
      return state;
  }
};
