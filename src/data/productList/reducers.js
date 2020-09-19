import * as AT from '@/data/productList/actionTypes';
import { combineReducers } from 'redux';

const initalPriceRange = [0, 1000];

const filterReducer = (
  state = {
    category: null,
    priceRange: initalPriceRange,
    sortBy: '',
  },
  { type, payload }
) => {
  switch (type) {
    case AT.SET_CATEGORY_FILTER:
      return {
        ...state,
        category: payload,
      };
    case AT.SET_PRICE_RANGE_FILTER:
      return {
        ...state,
        priceRange: payload,
      };
    case AT.SET_SORT_BY_FILTER:
      return {
        ...state,
        sortBy: payload,
      };
    case AT.RESET_SORT_BY_FILTER:
      return {
        ...state,
        sortBy: '',
      };
    case AT.RESET_PRICE_RANGE_FILTER:
      return {
        ...state,
        priceRange: initalPriceRange,
      };
    default:
      return state;
  }
};

const filteredListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case AT.GET_PRODUCT_LIST_SUCCESS:
      return payload;
    case AT.GET_PRODUCT_LIST_FAIL:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  filter: filterReducer,
  filteredList: filteredListReducer,
});
