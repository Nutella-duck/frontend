import { combineReducers } from 'redux';

import model from './model/reducers';
import project from './project/reducers';

import cards from './chartCards/reducers';
import hpo from './hpo/reducers';
export default combineReducers({
 
  model,
  project,
  cards,
  hpo
});
