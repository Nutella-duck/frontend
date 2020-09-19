// import { combineReducers } from 'redux';
// import { ADD_CART_ITEM, CLOSE_CART, OPEN_CART, TOGGLE_CART, REMOVE_CART_ITEM } from './actionTypes';

// const isShopingCartOpen = (state = false, { type, payload }) => {
//   switch (type) {
//     case OPEN_CART:
//       return true;
//     case CLOSE_CART:
//       return false;
//     case TOGGLE_CART:
//       return !state;
//     default:
//       return state;
//   }
// };

// const cartItems = (state = [], { type, payload = {} }) => {
//   const { product = {}, qty, id } = payload;
//   let found = {};

//   switch (type) {
//     case ADD_CART_ITEM:
//       found = state.find((v) => v.product.id === product.id);
//       if (found) {
//         if (qty) {
//           found.count += qty;
//         } else {
//           found.count += 1;
//         }
//         return [...state];
//       } else {
//         return [...state, { product, count: qty ? qty : 1 }];
//       }

//     case REMOVE_CART_ITEM:
//       found = state.find((v) => v.product.id === id);
//       if (found == null) {
//         throw new Error(`Can not find the item (${id})`);
//       }
//       if (found && found.count > 1) {
//         found.count -= 1;
//       } else {
//         const index = state.indexOf(found);
//         state.splice(index, 1);
//       }
//       return [...state];

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   isShopingCartOpen,
//   cartItems,
// });
import * as Actions from './actionTypes';
import {  handleActions } from 'redux-actions';
const initialState = {
  totalRun:[{total_run:"0"}],
  index: 8,
  graphData:[],
  models: [
    {
      NAME: "project_test",
      PROJECT: "projectStudy",
      STATE: "Finshed",
      CREATED: "1 m ago",
      CREATEDBY: "이해인",
      RUNTIME: "20 minute",
      ACCURACY: "0.3993",
      LOSS: "2.8553",
      VAL_ACCURACY: "0.5333",
      EPOCH: "50",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-002",
      PROJECT: "NutellaCoder",
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "이해인",
      RUNTIME: "10 minute",
      ACCURACY: "0.5609",
      LOSS: "1.2758",
      VAL_ACCURACY: "0.5333",
      EPOCH: "30",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-003",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 min ago",
      CREATEDBY: "이해인",
      RUNTIME: "15 minute",
      ACCURACY: "0.6718",
      LOSS: "1.0030",
      VAL_ACCURACY: "0.7152",
      EPOCH: "35",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-004",
      PROJECT: "NutellaCoder",
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "이해인",
      RUNTIME: "3 minute",
      ACCURACY: "0.711",
      LOSS: "0.8505",
      VAL_ACCURACY: "0.7438",
      EPOCH: "10",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
      CREATEDBY: "이해인",
      RUNTIME: "20 minute",
      ACCURACY: "0.7388",
      LOSS: "0.7329",
      VAL_ACCURACY: "0.7645",
      EPOCH: "25",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
      CREATEDBY: "이해인",
      RUNTIME: "23 minute",
      ACCURACY: "0.7511",
      LOSS: "0.6694",
      VAL_ACCURACY: "0.7603",
      EPOCH: "27",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
      CREATEDBY: "이해인",
      RUNTIME: "30 minute",
      ACCURACY: "0.7619",
      LOSS: "0.6172",
      VAL_ACCURACY: "0.7720",
      EPOCH: "35",
      runName:"run1"
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
      CREATEDBY: "이해인",
      RUNTIME: "35 minute",
      ACCURACY: "0.7704",
      LOSS: "0.5701",
      VAL_ACCURACY: "0.7830",
      EPOCH: "37",
      runName:"run1"
    },
  ],
};


 const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case Actions.ADD_MODEL: {
      const { models } = state;
      const model = {};
      model.id = 1;
      model.name = action.name;
      models.concat(model);
      return {
        ...state,
        models: models.concat(model),
      };
    }
    case Actions.FETCH_ALL_MODEL_DATA: {
      return {
        ...state,
        models: action.modelData,
      };
    }
    case Actions.FETCH_NUMBER_OF_MODEL:{
      
      return {
        ...state,
       totalRun: action.totalRun,
      };
    }
    case Actions.FETCH_GRAPH_DATA:{
      // state.graphData.unshift (action.graphData)
      // console.log("리듀서",state.graphData)
      var data =[];
      data=action.graphData.map(a=>a.accuracy);
       state.graphData.unshift (data)
      console.log("리듀서",data)
      return {
        ...state,
          
        // graphData:state.graphData.concat(data)
      };
    }

    case "@Model/GET_MODEL_SUCCESS":{
      console.log("GET_MODEL_SUCCESS",action)
      
      return {...state,
        totalRun:action.payload.totalRun,
      models:action.payload.models
      
      };
    }
    case Actions.GET_GRAPH_SUCCESS:{
      return {...state,
        graphData:action.payload.graph
      }
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;