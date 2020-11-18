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
export const getGraph2Success = createAction(AT.GET_GRAPH2_SUCCESS);
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
export const getSelectedModelData = (modelId) => async (dispatch, getState) => {
  dispatch(getmodelListLoading);
  try {
    const model = await apis.modelApi.getSelectedModelData(modelId);
    dispatch(fetchAllModelData(model));
  } catch (error) {}
};

export const getNumberOfModel = (proejectId) => async (dispatch, getState) => {
  dispatch(getmodelListLoading);
  try {
    const model = await apis.modelApi.getNumberOfModel(proejectId);
    dispatch(fetchNumberOfModel(model));
  } catch (error) {}
};

export const getResult = (proejectId) => async (dispatch, getState) => {
  dispatch(getmodelListLoading);
  try {
    const [totalRun, models] = await Promise.all([
      apis.modelApi.getNumberOfModel(proejectId), //totalRun
      apis.modelApi.getSelectedModelData(proejectId),
    ]);
    dispatch(getModelSuccess({ totalRun, models }));
  } catch (error) {}
};

export const getGraphs1 = (id, indicator, totalRun) => async (
  dispatch,
  getState,
) => {
  dispatch(getmodelListLoading);
  try {
    const graphPromise = [];
    for (let i = 0; i < indicator.length; i++) {
      for (let j = 0; j < totalRun; j++)
        graphPromise.push(apis.modelApi.getGraphData(j + 1, indicator[i]));
    }
    const graph = await Promise.all(graphPromise);
    dispatch(getGraphSuccess(graph));
  } catch (error) {}
};

export const getGraphs = () => async (dispatch, getState) => {
  dispatch(getmodelListLoading);
  try {
    const graph = await apis.modelApi.getGraphData(1);

    dispatch(getGraphSuccess(graph));
  } catch (error) {}
};
export const testGraphs = (runs) => async (dispatch, getState) => {
  dispatch(getmodelListLoading);
  try {
    const graphPromise = [];
    for (let i = 0; i < runs.length; i++) {
      graphPromise.push(apis.modelApi.getGraphData(runs[i]));
      console.log(`promis${graphPromise}`);
    }
    const graph = await Promise.all(graphPromise);
    console.log('여기들어오나요');
    dispatch(getGraph2Success(graph));
  } catch (error) {}
};
export const getOneGraph = (id, indicator) => async (dispatch, getState) => {
  const graphPromise = [];
  for (let i = 0; i < indicator.length; i++) {
    graphPromise.push(apis.modelApi.getGraphData(id, indicator[i]));
  }
  const graph = await Promise.all(graphPromise);
  dispatch(getGraphSuccess(graph));
};
