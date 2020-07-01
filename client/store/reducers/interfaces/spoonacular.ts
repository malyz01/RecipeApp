export interface IState {
  recipes: object;
  recipe: object;
}

export interface IAction {
  type: string;
  payload: object | Array<object> | string;
}
