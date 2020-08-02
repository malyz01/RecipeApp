import { Types } from '../types';
import * as i from '../../interfaces';

interface IState {
  recipes: i.IData;
  recipe: i.IData;
}

const INITIAL: IState = {
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

export default (state: IState = INITIAL, action: i.IAction) => {
  switch (action.type) {
    case Types.FETCH_SPOONACULAR_RECIPES:
      return { ...state, recipes: { pending: false, data: action.payload } };
    case Types.FETCH_SPOONACULAR_RECIPE_BY_ID:
    case Types.SELECT_SPOONACULAR_RECIPE:
      return { ...state, recipe: { pending: false, data: action.payload } };
    default:
      return state;
  }
};
