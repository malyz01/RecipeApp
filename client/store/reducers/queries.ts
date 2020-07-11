import { Types } from '../types';
import { IComplexSearch } from '../../interfaces/spoonacular';
import * as i from './interfaces/spoonacular';

const INITIAL: IComplexSearch = {
  query: ''
};

export default (state: IComplexSearch = INITIAL, action: i.IAction) => {
  switch (action.type) {
    case Types.SET_QUERIES:
      return { ...state, ...(action.payload as object) };
    case Types.CLEAR_QUERIES:
      return INITIAL;
    default:
      return state;
  }
};
