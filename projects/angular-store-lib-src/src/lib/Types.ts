import { Subject } from 'rxjs';

export interface IReducer<T> {
  key: string;
  initialState: T;
}

export interface IAction {
  type: string;
  metaData: IActionMap;
}

export interface IActionMap {
  target: Object;
  propertyKey: string;
  descriptionKey: TypedPropertyDescriptor<Function>;
}

/**
 * action to reach reducer method
 */
export interface IDispatch<T> {
  type: string;
  payload: T;
}

export interface UpdateState<T> {
  key: string;
  payload: T;
}

export interface IState {
  getState: <T>() => T;
  updateState: <T>(input: UpdateState<T>) => void;
}

export interface IModuleConfig {
  logger?: boolean;
}
