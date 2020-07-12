import { Types } from '../types';
import setReducer from './index';

export const setIngredientQuery = (queries: object) => (dispatch) => {
  try {
    dispatch(setReducer(Types.SET_QUERY_INGREDIENTS, queries));
  } catch (err) {
    console.log(err);
  }
};

export const setNutriQuery = (queries: object) => (dispatch) => {
  try {
    dispatch(setReducer(Types.SET_QUERY_NUTRIENTS, queries));
  } catch (err) {
    console.log(err);
  }
};
