import { Types } from '../types';
import * as i from './interfaces/spoonacular';

const INITIAL: i.IState = {
  recipes: {
    pending: true,
    data: {
      results: []
    }
  },
  recipe: {
    pending: true,
    data: {}
  }
};

export default (state: i.IState = INITIAL, action: i.IAction) => {
  switch (action.type) {
    case Types.FETCH_SPOONACULAR_RECIPES:
      return { ...state, recipes: { pending: false, data: action.payload } };
    case Types.FETCH_SPOONACULAR_RECIPE_BY_ID:
      return state;
    default:
      return state;
  }
};
