import * as Actions from './actionTypes';

const initialState = {
  totalRun: 0,
  graphData: [],
  projectName:"",
  isGraphLoading: true,
  selectedModel: [],
  models: [],
  indicatorCard: [],
  systemCard: [],
  thisPageModels:[]
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    
    
    case Actions.GET_ALL_MODEL_SUCCESS: {
      return {
        ...state,
        thisPageModels: action.payload,
      };
    }

  
    case Actions.GET_SELECTED_MODEL: {
     
      return {
        ...state,
        selectedModel: action.selectedModel,
      };
    }

    case Actions.GET_MODELS_INFO_SUCCESS: {
      
      return {
      
        ...state,
        totalRun: action.payload.projectInfo[0].totalRun,
        projectName:action.payload.projectInfo[0].projectName,
        models: action.payload.models,
      };
    }
   
    
    case Actions.GET_GRAPH_SUCCESS: {
      const indicators = Object.keys(
        JSON.parse(action.payload[0][0].indicator),
      );
      const system = Object.keys(
        JSON.parse(action.payload[0][0].system),
      );
         return {
        ...state,
        graphData: action.payload,
        isGraphLoading: false,
        indicatorCard: indicators,
         systemCard: system,
      };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
