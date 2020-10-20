import * as Actions from './actionTypes';

const initialState = {
 
  // title:"titlereduce",
 hpoData: [
    { name: 'hpo1', state: 'running', created: 35000, computedTime: '1hours', runCount: 115,createdBy:'leehaein' },{computedTime: "1hours"
    ,created: 35000,
    createdBy: "leehaein",
    name: "dfwe",
    runCount: 100,
    state: "gewg"},
    { name: 'hpo1', state: 'running', created: 35000, computedTime: '1hours', runCount: 115,createdBy:'leehaein'  },{ name: 'hpo1', state: 'running', created: 35000, computedTime: '1hours', runCount: 115,createdBy:'leehaein'  },
  ]
};


const HpoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_HPO_DATA: {
    
      return {
        ...state,
       
      };
    }
    case Actions.ADD_HPO_DATA:{
      
      const current =  action.hpoData;
     const {before} = state;
  
    console.log(current)
      return {
        ...state, 
        hpoData:[...state.hpoData,action.hpoData]
        
      }
    }
    
    default: {
      return state;
    }
  }
};
export default HpoReducer;