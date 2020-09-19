import * as AT from '@/data/relatedProductList/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AT.GET_RELATED_PRODUCT_LIST_SUCCESS:
      return payload;
    case AT.GET_RELATED_PRODUCT_LIST_FAIL:
      return state;
    default:
      return state;
  }
};
