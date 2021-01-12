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
export const getModelsInfoSuccess = createAction(AT.GET_MODELS_INFO_SUCCESS);
export const getGraphSuccess = createAction(AT.GET_GRAPH_SUCCESS);

export const getAllModelSuccess = createAction(AT.GET_ALL_MODEL_SUCCESS);


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

export const getAllModel = (modelId) => async (dispatch) => {
  dispatch(getmodelListLoading);
  try {
    const model = await apis.modelApi.fetch10model(modelId);

    dispatch(getAllModelSuccess(model));
  } catch (error) {}
};


export const getModelsInfo = (proejectId) => async (dispatch) => {
  dispatch(getmodelListLoading);
  try {
    const [projectInfo, models] = await Promise.all([
      apis.modelApi.getNumberOfModel(proejectId), //totalRun & projectName
      apis.modelApi.getModelsThisProject(proejectId), //models
    ]);
    dispatch(getModelsInfoSuccess({ projectInfo, models }));
  } catch (error) {}
};


export const getGraph = (runs, selected) => async (dispatch) => {
  //runs : runId set 
  //selected : state->selectedModel
  dispatch(getmodelListLoading);
  try {
    const graphPromise = [];
    if (selected.length > 0) {
      selected = selected.map((v) => v.runId);
      runs = selected;
    }
    for (let i = 0; i < runs.length; i++) {
      graphPromise.push(apis.modelApi.getGraphData(runs[i]));
    }
    const graph = await Promise.all(graphPromise);
    dispatch(getGraphSuccess(graph));
  } catch (error) {}
};


