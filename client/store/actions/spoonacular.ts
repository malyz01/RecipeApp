import { Types } from '../types';
import { spoonacular } from '../../api';
import * as i from '../../interfaces';
import setReducer from './index';

export const fetchRecipesBy = (params: string, queries: i.IQueries) => async (dispatch) => {
  try {
    const { data } = await spoonacular.get(`/${params}`, queries);
    dispatch(setReducer(Types.FETCH_SPOONACULAR_RECIPES, data));
  } catch (err) {
    console.log(err);
  }
};

export const selectRecipe = (data: i.IRecipe) => (dispatch) => {
  try {
    dispatch(setReducer(Types.SELECT_SPOONACULAR_RECIPE, data));
  } catch (err) {
    console.log(err);
  }
};
