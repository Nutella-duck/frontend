import * as Actions from './actionTypes';

const initialState = {
  totalRun: 0,
  index: 8,
  graphData: [],
  projectName:"",
  isGraphLoading: true,
  selectedModel: [],
  models: [],
  graph2Data: [],
  indicatorCard: [],
  systemCard: [],
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    
    
    case Actions.GET_ALL_MODEL_SUCCESS: {
      return {
        ...state,
        models: action.modelData,
      };
    }
    case Actions.FETCH_NUMBER_OF_MODEL: {
      return {
        ...state,
        totalRun: action.totalRun,
      };
    }
  
    case Actions.FETCH_SELECTED_MODEL: {
      const { selectedModel } = state;
      return {
        ...state,
        selectedModel: action.selectedModel,
      };
    }

    case '@Model/GET_MODELS_INFO_SUCCESS': {
      
      return {
      
        ...state,
        totalRun: action.payload.projectInfo[0].totalRun,
        projectName:action.payload.projectInfo[0].projectName,
        models: action.payload.models,
      };
    }
   
    //이거사용 graph2Data, isGraphLoading,indicatorCard 
    case Actions.GET_GRAPH_SUCCESS: {
      const indicators = Object.keys(
        JSON.parse(action.payload[0][0].indicator),
      );
      //const systems = Object.keys(JSON.parse(action.payload[0][0].system));
      return {
        ...state,
        graph2Data: action.payload,
        isGraphLoading: false,
        indicatorCard: indicators,
        // systemCard: systems,
      };
    }
    default: {
      return state;
    }
  }
};
export default ModelReducer;
