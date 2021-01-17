import { fail, loading, success } from '../utils';
export const GET_MODEL_LIST = '@Model/GET_MODEL_LIST';
export const GET_ALL_MODEL_SUCCESS = '@Model/GET_ALL_MODEL_SUCCESS';
export const GET_MODELS_INFO_SUCCESS = '@Model/GET_MODELS_INFO_SUCCESS';
export const GET_GRAPH_SUCCESS = '@Model/GET_GRAPH_SUCCESS';
export const GET_MODEL_LIST_FAIL = fail(GET_MODEL_LIST);
export const GET_MODEL_LIST_LOADING = loading(GET_MODEL_LIST);
export const GET_SELECTED_MODEL = '@Model/GET_SELECTED_MODEL';
