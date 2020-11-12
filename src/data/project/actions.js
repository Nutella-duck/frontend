import apis from '../../apis/index';

import * as AT from './actionTypes';

export const projectLoading = () => ({
  type: AT.PROJECT_LOADING,
});

export const projectSuccess = (data) => ({
  type: AT.PROJECT_SUCCESS,
  data,
});

export const projectFail = (error) => ({
  type: AT.PROJECT_FAIL,
  error,
});

export const fetchAllProjectData = (projectData) => {
  return {
    type: AT.FETCH_ALL_PROJECT_DATA,
    projectData,
  };
};

export const getAllPorject = (projectId) => async (dispatch, getState) => {
  const project = await apis.projectApi.fetchAllProject(projectId);
  dispatch(fetchAllProjectData(project));
};

export const addProject = (projectData) => async (dispatch, getState) => {
  // await apis.projectApi.fetchAllProject(projectData);
  dispatch(projectLoading());
  try {
    const product = await apis.projectApi.addProject(projectData);
    dispatch(projectSuccess(product));
  } catch (e) {
    dispatch(projectFail(e));
  }
};
