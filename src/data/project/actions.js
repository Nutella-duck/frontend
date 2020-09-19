import * as AT from 'data/project/actionTypes';
import apis from '../apis';
import axios from "axios";
export const getprojectDetailLoading = () => ({
  type: AT.GET_project_DETAIL_LOADING,
});

export const getprojectDetailSuccess = (data) => ({
  type: AT.GET_project_DETAIL_SUCCESS,
  payload: data,
});

export const getprojectDetailFail = (error) => ({
  type: AT.GET_project_DETAIL_FAIL,
  payload: error,
});

export const getprojectDeatil = (projectId) => async (dispatch, getState) => {
  dispatch(getprojectDetailLoading());
  try {
    const project = await apis.projectApi.fetchprojectDeatil(projectId);
    dispatch(getprojectDetailSuccess(project));
  } catch (e) {
    dispatch(getprojectDetailFail(e));
  }
};
export const fetchAllProjectData = (projectData) => {
  return {
    type: AT.FETCH_ALL_PROJECT_DATA,
    projectData,
  };
};
export const selectProject= (projectId) => {
 return {
   type:AT.SELECT_POJECT,
   projectId
 }
  
}

export const getAllPorject = (projectId) => async (dispatch, getState) => {
  dispatch(getprojectDetailLoading());
  try {
    const project = await apis.projectApi.fetchAllProject(projectId);
    dispatch(getprojectDetailSuccess(project));
  } catch (e) {
    dispatch(getprojectDetailFail(e));
  }
};
export const addProject = (projectData) => async (dispatch, getState) => {
  dispatch(getprojectDetailLoading());
  try {
    const project = await apis.projectApi.addProject(projectData);
    dispatch(getprojectDetailSuccess(project));
  } catch (e) {
    dispatch(getprojectDetailFail(e));
  }
};

