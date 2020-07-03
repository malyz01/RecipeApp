import { Types } from '../types';
import { spoonacular } from '../../api';
import * as i from '../../interfaces/spoonacular';

function setRecipes(type: Types, payload: {}) {
  return { type, payload };
}

export const fetchRecipesBy = (params: string, queries: i.IQueries) => async (dispatch) => {
  try {
    const { data } = await spoonacular.get(`/${params}`, queries);
    dispatch(setRecipes(Types.FETCH_SPOONACULAR_RECIPES, data));
  } catch (err) {
    console.log(err);
  }
};
