import { Subject } from 'rxjs';

export interface IReducer {
  key: string;
  intialState: any;
}

export interface IAction {
  type: string;
  target: Object;
  propertyKey: string;
  descriptionKey: TypedPropertyDescriptor<Function>;
}

/**
 * action to reach reducer method
 */
export interface IDispatch {
  type: string;
  payload: any;
}

export interface UpdateState {
  key: string;
  payload: any;
}

export interface ISelector {
  key: string;
  subject: Subject<any>;
}

export type IUpdateState = ({ key: string, payload: any }) => any;

export interface IState {
  getState: () => any;
  updateState: (input: UpdateState) => void;
}

export interface IModuleConfig {
  logger?: boolean;
}