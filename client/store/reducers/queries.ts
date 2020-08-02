import { Types } from '../types';

interface IAction {
  type: Types;
  payload: IPayload;
}

export interface IPayload {
  key: string;
  value: string[];
}

const INITIAL = {
  includeIngredients: [],
  excludeIngredients: [],
  nutrients: {}
};

export default (state = INITIAL, action: IAction) => {
  switch (action.type) {
    case Types.SET_QUERY_INGREDIENTS:
      return { ...state, [action.payload.key]: action.payload.value };
    case Types.SET_QUERY_NUTRIENTS:
      return { ...state, nutrients: action.payload };
    default:
      return state;
  }
};
