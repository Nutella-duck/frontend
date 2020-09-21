import apis from '../../apis/index';

import * as AT from './actionTypes';



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
  
await apis.projectApi.fetchAllProject(projectData);
 

};

