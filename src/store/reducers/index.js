import { combineReducers } from "redux";
import section from "./Section.reducer";

const rootReducer = combineReducers({
  section,
});

export default rootReducer;
