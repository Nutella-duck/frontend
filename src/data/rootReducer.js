import { combineReducers } from 'redux';


import model from "./model/reducers";
import project from "../store/reducers/Project.reducer";
import section from "../store/reducers/Section.reducer"
import system from "../store/reducers/System.reducer"
export default combineReducers({
  system,
  section,
 model,
  project
});


