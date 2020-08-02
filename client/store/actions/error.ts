import { Types } from '../types';
import setReducer from './index';
import { IPayload } from '../reducers/error';

export const setError = (payload: IPayload) => (dispatch) => {
  try {
    dispatch(setReducer(Types.SET_ERROR, payload));
  } catch (err) {
    console.log(err);
  }
};

export const clearError = (payload: IPayload = { status: null, message: null }) => (dispatch) => {
  try {
    dispatch(setReducer(Types.SET_ERROR, payload));
  } catch (err) {
    console.log(err);
  }
};
