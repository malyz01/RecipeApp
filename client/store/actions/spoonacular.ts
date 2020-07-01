import { Types } from '../types';
import { Params } from '../../enum/spoonacular';
import api from '../../api';

function setRecipes(type: Types, payload) {
  return { type, payload };
}

export const fetchRecipesBy = (params: Params, queries) => async (dispatch) => {
  try {
    const { data } = await api.get(`/spoonacular/${params}`, queries);
    dispatch(setRecipes(Types.FETCH_SPOONACULAR_RECIPES, data));
  } catch (err) {
    console.log(err);
  }
};
