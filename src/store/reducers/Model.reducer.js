import * as Actions from "../actions";

const initialState = {
  index: 7,
  models: [
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
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
    },
  ],
};

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.MODEL_DATA: {
      return {
        ...state.models,
      };
    }
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

    default: {
      return state;
    }
  }
};

export default ModelReducer;
