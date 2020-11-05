import apis from '../../apis/index';

import * as AT from './actionTypes';

export const checkoutLoading = () => ({
  type: AT.CHECKOUT_LOADING,
});

export const checkoutSuccess = (data) => ({
  type: AT.CHECKOUT_SUCCESS,
  data,
});

export const checkoutFail = (error) => ({
  type: AT.CHECKOUT_FAIL,
  error,
});

export const fetchAllProjectData = (projectData) => {
  return {
    type: AT.FETCH_ALL_PROJECT_DATA,
    projectData,
  };
};




export const getAllPorject = (projectId) => async(dispatch,getState)=>{
  
  const project = await apis.projectApi.fetchAllProject(projectId);
 dispatch(fetchAllProjectData(project));

};

export const addProject = (projectData) => async(dispatch,getState)=>{
  
// await apis.projectApi.fetchAllProject(projectData);
dispatch(checkoutLoading());
try {
  const product = await apis.projectApi.addProject(projectData);
  dispatch(checkoutSuccess(product));
} catch (e) {
  dispatch(checkoutFail(e));
}

};

