import apis from '../../apis/index';

import * as AT from './actionTypes';



export const fetchAllHpoData = () => {
  return {
    type: AT.FETCH_ALL_HPO_DATA,
   
  };
};




// export const getAllPorject = (hpoId) => async(dispatch,getState)=>{
  
//   const hpo = await apis.hpoApi.fetchAllHpo(hpoId);
//  dispatch(fetchAllHpoData(hpo));

// };

// export const addHpo = (hpoData) => async(dispatch,getState)=>{
  
// await apis.hpoApi.fetchAllHpo(hpoData);
 

// };
export const addHpo = (hpoData)=>{
  return{
    type: AT.ADD_HPO_DATA,
    hpoData,
  }
}

