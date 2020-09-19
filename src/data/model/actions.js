import apis from '../../apis/index';

import * as AT from './actionTypes';
import { createAction } from 'redux-actions';

// export const getProductDetailLoading = () => ({
//   type: AT.GET_PRODUCT_DETAIL_LOADING,
// });

// export const getProductDetailSuccess = (data) => ({
//   type: AT.GET_PRODUCT_DETAIL_SUCCESS,
//   payload: data,
// });

// export const getProductDetailFail = (error) => ({
//   type: AT.GET_PRODUCT_DETAIL_FAIL,
//   payload: error,
// });

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
export const fetchGraphData = (graphData) => {
  return {
    type: AT.FETCH_GRAPH_DATA,
    graphData,
  };
};
/*
export const getAllModelData = (modelId) => async(dispatch,getState)=>{
  
    const model = await apis.modelApi.fetch10model(modelId);
   dispatch(fetchAllModelData(model));
 
};
export const getSelectedModelData = (modelId) => async(dispatch,getState)=>{
  
  const model = await apis.modelApi.getSelectedModelData(modelId);
 dispatch(fetchAllModelData(model));

};
*/
export const getNumberOfModel = (modelId) => async(dispatch,getState)=>{
  
  const model = await apis.modelApi.getNumberOfModel(modelId);
 dispatch(fetchNumberOfModel(model));

};

export const getResult = (modelId) => async(dispatch,getState)=>{
  const [totalRun,models] = await Promise.all([apis.modelApi.getNumberOfModel(modelId),apis.modelApi.getSelectedModelData(modelId)])
  console.log("totalRun",totalRun,)
  dispatch(getModelSuccess({totalRun,models}))
};

export const getGraphs =(id,index,totalRun)=> async(dispatch,getState)=>{
  
  const graphPromise=[]
  for(let i=0;i<totalRun;i++){
   graphPromise.push(apis.modelApi.getGraphData(i+1,index));
   
  }
  console.log("graphPromise",graphPromise)
  const graph =await Promise.all(graphPromise)
  console.log("그래프 받음")
  dispatch(getGraphSuccess(graph));
}