import { combineReducers } from "redux";
import section from "./Section.reducer";

import system from "./System.reducer";
import model from "./Model.reducer";
import project from "./Project.reducer";
const rootReducer = combineReducers({
  section,

  system,
 model,
  project
});

export default rootReducer;
