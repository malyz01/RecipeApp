import { combineReducers } from 'redux';
import spoonacular from './spoonacular';
import queries from './queries';

export default combineReducers({
  spoonacular,
  queries
});
