import * as Actions from "../actions";

const initialState = {
    index:4,
    models:[
    {
        NAME: "Model-Name-A-002",
        PROJECT: "NutellaCoder",
        STATE: "Crashed",
        CREATED: "3 m ago",
        
      },
      {
        NAME: "Model-Name-A-003",
        PROJECT: "NutellaCoder",
        STATE: "Finished",
        CREATED: "8 min ago",
        
      },
      {
        NAME: "Model-Name-A-004",
        PROJECT: "NutellaCoder",
        STATE: "Crashed",
        CREATED: "3 m ago",
        
      },
      {
        NAME: "Model-Name-A-005",
        PROJECT: "NutellaCoder",
        STATE: "Finished",
        CREATED: "8 hours ago",
        
      },]
};

const SectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.MODEL_DATA: {
      return {
        ...state.models
        
      };
    }
   

    default: {
      return state;
    }
  }
};

export default SectionReducer;
