import { combineReducers } from 'redux';

import model from './model/reducers';
import project from './project/reducers';
import section from '../store/reducers/Section.reducer';
import system from '../store/reducers/System.reducer';
import cards from './chartCards/reducers';
export default combineReducers({
  system,
  section,
  model,
  project,
  cards,
});
