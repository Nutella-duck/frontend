import { fail, loading, success } from '../utils';
export const HPO = 'HPO';
export const HPO_SUCCESS = success(HPO);
export const HPO_FAIL = fail(HPO);
export const HPO_LOADING = loading(HPO);
export const FETCH_ALL_HPO_CONFIG = 'hpo/FETCH_ALL_HPO_CONFIG';
export const FETCH_ALL_HPO_DATA = 'hpo/FETCH_ALL_HPO_DATA';
export const FETCH_ALL_HPO_IMPORTANCE = 'hpo/FETCH_ALL_HPO_IMPORTANCE ';
export const FETCH_GET_BEST_PARAMETER = 'hpo/FETCH_GET_BEST_PARAMETER ';
export const ADD_HPO_DATA = 'hpo/ADD_HPO_DATA';
export const HPO_CONFIG = 'hpo/hpoConfig';
export const GET_HPO_LIST = 'hpo/getHPOList';
export const ADD_HPO_PROJECT = 'hpo/addHPOProject';
export const ADD_HPO_CONFIG = 'hpo/addHPOConfig';
export const GET_HPO_IMPORTANCE = 'hpo/getHPOImportance';
export const GET_BEST_PARAMETER = 'hpo/getBestParameter';
