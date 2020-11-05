


import { fail, loading, success } from '../utils';
export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_SUCCESS = success(CHECKOUT);
export const CHECKOUT_FAIL = fail(CHECKOUT);
export const CHECKOUT_LOADING = loading(CHECKOUT);
export const FETCH_ALL_PROJECT_DATA = "project/FETCH_ALL_PROJECT_DATA";
