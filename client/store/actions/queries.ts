import { Types } from '../types';
import setReducer from './index';
import { IPayload } from '../reducers/queries';

export const setIngredientQuery = (queries: IPayload) => (dispatch) => {
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
