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
export const hpoConfig = (id) => async (dispatch, getState) => {
  dispatch(HPOLoading);
  try {
    const model = await apis.hpoApi.getHPOResult(id);
    console.log(model);
    dispatch(fetchHPOConfig(model));
  } catch (e) {
    console.log(e);
    dispatch(HPOFail(e));
  }
};
export const getHPOImportance = (id) => async (dispatch, getState) => {
  dispatch(HPOLoading);
  try {
    const model = await apis.hpoApi.getHPOImportance(id);
    dispatch(fetchHPOImportance(model));
  } catch (e) {
    console.log(e);
    dispatch(HPOFail(e));
  }
};
export const getBestParameter = (id) => async (dispatch, getState) => {
  dispatch(HPOLoading);
  try {
    const model = await apis.hpoApi.getBestParameter(id);
    dispatch(fetchGetBestParameter(model));
  } catch (e) {
    console.log(e);
    dispatch(HPOFail(e));
  }
};
export const fetchGetBestParameter = (best) => {
  return {
    type: AT.FETCH_GET_BEST_PARAMETER,
    best,
  };
};
export const fetchHPOImportance = (hpoImportance) => {
  return {
    type: AT.FETCH_ALL_HPO_IMPORTANCE,
    hpoImportance,
  };
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
