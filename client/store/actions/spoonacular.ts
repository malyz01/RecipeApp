import { Types } from '../types';
import api from '../../api';

export enum Spoonacular {
  search = 'search',
  findByIngredients = 'findByIngredients',
  findByNutrients = 'findByNutrients',
  complexSearch = 'complexSearch'
}

function setRecipes(type: Types, payload) {
  return { type, payload };
}

export const fetchRecipesBy = (params: Spoonacular, queries) => async (dispatch) => {
  try {
    const { data } = await api.get(`/spoonacular/${params}`, queries);
    dispatch(setRecipes(Types.FETCH_SPOONACULAR_RECIPES, data));
  } catch (err) {
    console.log(err);
  }
};
