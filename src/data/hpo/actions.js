import apis from '../../apis/index';

import * as AT from './actionTypes';
import axios from 'axios';
export const fetchAllHpoData = (hpoData) => {
  return {
    type: AT.FETCH_ALL_HPO_DATA,
    hpoData,
  };
};
export const fetchHPOConfig = (hpoConfig) => {
  return {
    type: AT.FETCH_ALL_HPO_CONFIG,
    hpoConfig,
  };
};
export const getHPOList = () => async (dispatch, getState) => {
  const model = await apis.hpoApi.getHPOProjectList();
  console.log('hpo!,!', model);
};
export const getAllModelData = () => async (dispatch, getState) => {
  const model = await apis.hpoApi.getHPOProjectList();
  dispatch(fetchAllHpoData(model));
};
export const hpoConfig = () => async (dispatch, getState) => {
  const model = await apis.hpoApi.getHPOResult(1);
  dispatch(fetchHPOConfig(model));
};

// export const getAllPorject = (hpoId) => async(dispatch,getState)=>{

//   const hpo = await apis.hpoApi.fetchAllHpo(hpoId);
//  dispatch(fetchAllHpoData(hpo));

// };

// export const addHpo = (hpoData) => async(dispatch,getState)=>{

// await apis.hpoApi.fetchAllHpo(hpoData);

// };
export const addHpo = (hpoData) => {
  return {
    type: AT.ADD_HPO_DATA,
    hpoData,
  };
};
