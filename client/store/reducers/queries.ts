import { Types } from '../types';
import * as i from '../../interfaces';

const INITIAL = {
  ingredients: {
    included: [],
    excluded: []
  },
  nutrients: {}
};

export default (state = INITIAL, action: i.IAction) => {
  switch (action.type) {
    case Types.SET_QUERY_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case Types.SET_QUERY_NUTRIENTS:
      return { ...state, nutrients: action.payload };
    default:
      return state;
  }
};
