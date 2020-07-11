// TODO refactor this

export interface IData {
  pending: boolean;
  data: object;
}

export interface IState {
  recipes: IData;
  recipe: IData;
}

export interface IAction {
  type: string;
  payload: object | Array<object> | string;
}
