export interface IAction {
  type: string;
  payload: object | Array<object> | string;
}
