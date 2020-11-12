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
export const getAllModelData = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/hpoData`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        dispatch(fetchAllHpoData(response.data));
      })
      .catch((error) => {
        console.log('error read model');
        throw error;
      });
  };
};
export const hpoConfig = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/hpoConfig`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        dispatch(fetchHPOConfig(response.data));
      })
      .catch((error) => {
        console.log('error read model');
        throw error;
      });
  };
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
