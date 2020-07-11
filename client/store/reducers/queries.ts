import { Types } from '../types';
import * as i from '../../interfaces';

const INITIAL: i.IComplexSearch = {
  query: ''
};

export default (state: i.IComplexSearch = INITIAL, action: i.IAction) => {
  switch (action.type) {
    case Types.SET_QUERIES:
      return { ...state, ...(action.payload as object) };
    case Types.CLEAR_QUERIES:
      return INITIAL;
    default:
      return state;
  }
};
