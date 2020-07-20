import { Types } from '../types';

interface IAction {
  type: Types;
  payload: IPayload;
}

export interface IPayload {
  status: null | number;
  message: null | string;
}

const INITIAL: IPayload = {
  status: null,
  message: null
};

export default (state: IPayload = INITIAL, action: IAction) => {
  switch (action.type) {
    case Types.SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
