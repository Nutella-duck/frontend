import apis from '../../apis/index';

import * as AT from './actionTypes';
import { createAction } from 'redux-actions';

export const getmodelListLoading = () => ({
  type: AT.GET_MODEL_LIST_LOADING,
});

export const getmodelListSuccess = (data) => ({
  type: AT.GET_MODEL_LIST_SUCCESS,
  payload: data,
});

export const getmodelListFail = (error) => ({
  type: AT.GET_MODEL_LIST_FAIL,
  payload: error,
});
export const getModelSuccess = createAction(AT.GET_MODEL_SUCCESS);
export const getGraphSuccess = createAction(AT.GET_GRAPH_SUCCESS);
export const fetchAllModelData = (modelData) => {
  return {
    type: AT.FETCH_ALL_MODEL_DATA,
    modelData,
  };
};
export const fetchNumberOfModel = (totalRun) => {
  return {
    type: AT.FETCH_NUMBER_OF_MODEL,
    totalRun,
  };
};
export const fetchSelectedModel = (selectedModel) => {
  return {
    type: AT.FETCH_SELECTED_MODEL,
    selectedModel,
  };
};
export const fetchGraphData = (graphData) => {
  return {
    type: AT.FETCH_GRAPH_DATA,
    graphData,
  };
};
export const getIndicators = () => {
  return {
    type: AT.GET_INDICATORS,
  };
};
export const getSelectedModel = () => {
  return {
    type: AT.GET_SELECTED_MODEL,
  };
};

export const getAllModelData = (modelId) => async (dispatch, getState) => {
  dispatch(getmodelListLoading);
  try {
    const model = await apis.modelApi.fetch10model(modelId);
    dispatch(fetchAllModelData(model));
  } catch (error) {}
};

