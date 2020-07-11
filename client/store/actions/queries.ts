import { Types } from '../types';
import setReducer from './index';

export const setQueries = (queries: object) => (dispatch) => {
  try {
    dispatch(setReducer(Types.SET_QUERIES, queries));
  } catch (err) {
    console.log(err);
  }
};

export const clearQueries = () => (dispatch) => {
  try {
    dispatch(setReducer(Types.CLEAR_QUERIES));
  } catch (err) {
    console.log(err);
  }
};
