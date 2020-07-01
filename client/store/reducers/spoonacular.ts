import { Types } from '../types';
import * as i from './interfaces/spoonacular';

const INITIAL: i.IState = {
  recipes: {},
  recipe: {}
};
export default (state: i.IState = INITIAL, action: i.IAction): i.IState => {
  switch (action.type) {
    case Types.FETCH_SPOONACULAR_RECIPES:
      return state;
    case Types.FETCH_SPOONACULAR_RECIPE_BY_ID:
      return state;
    default:
      return state;
  }
};
