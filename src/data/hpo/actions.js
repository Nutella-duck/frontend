import apis from '../../apis/index';

import * as AT from './actionTypes';
import axios from 'axios';
export const HPOLoading = () => ({
  type: AT.HPO_LOADING,
});

export const HPOSuccess = (data) => ({
  type: AT.HPO_SUCCESS,
  data,
});

export const HPOFail = (error) => ({
  type: AT.HPO_FAIL,
  error,
});
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

export const addHpo = (hpoData) => {
  return {
    type: AT.ADD_HPO_DATA,
    hpoData,
  };
};
export const addHPOProject = (HPOProject, HPOConfig) => async (
  dispatch,
  getState,
) => {
  dispatch(HPOLoading);
  try {
    const project = await apis.hpoApi.addHPOProject(HPOProject);
    dispatch(HPOSuccess(project));
    dispatch(addHPOConfig(HPOConfig));
  } catch (e) {
    console.log(e);
    dispatch(HPOFail(e));
  }
};
export const addHPOConfig = (HPOConfig) => async (dispatch, getState) => {
  dispatch(HPOLoading());
  try {
    const config = await apis.hpoApi.addHPOConfig(HPOConfig);
    dispatch(HPOSuccess(config));
  } catch (e) {
    console.log(e);
    dispatch(HPOFail(e));
  }
};
