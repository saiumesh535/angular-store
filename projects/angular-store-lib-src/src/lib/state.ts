import { Injectable, Inject } from '@angular/core';
import { IReducer, IDispatch, UpdateState, IState, IModuleConfig, IActionMap, IAction } from './Types';
import { logState, updateLogStatus } from './Utils';
import { selectorsMap } from './selectors';

// reducer class data
const reducers: IReducer<any>[] = [];

// actions data
const actionsMap: IAction[] = [];

// state of the applicaiton
let state = {};


@Injectable()
export class State {


  constructor(@Inject('config') config: IModuleConfig) {
    // updating the loggeer status
    updateLogStatus(!!config && config.logger || false);
   }


  /**
   * adding reducer to array
   * @param reducer
   */
  public addReducer(reducer: IReducer<any>): void {
    reducers.push(reducer);
    // intializing state
    this.intializeState(reducer.key, reducer.initialState);
  }

  /**
   * adding actions to array
   * @param action
   */
  public addActions(types: string[], metaData: IActionMap): void {
    for (const type of types) {
      actionsMap.push({
        type,
        metaData
      });
    }
  }

  /**
   * sending payload to reducer method with payload if any
   * @param action
   */
  public sendAction<T>(data: IDispatch<T>) {
    // iterate through actions, array to send payload
    for (const action of actionsMap) {
      if (action.type === data.type) {
        action.metaData.target[action.metaData.propertyKey](data.payload, this.getStateObject);
      }
    }
  }

  /**
   * updating State
   * @param input
   */
  public updatedState(input: UpdateState<any>): void {
    // check if that key exists in state or not
    if (input && input.key && state[input.key] !== undefined) {
      state = {...state, [input.key]: input.payload};
      // show updated state in color in console
      logState(state);
      // send data to selectors
      for (const selector of selectorsMap) {
        if (selector.key === input.key) {
          selector.subject.next(input.payload);
        }
      }
    }
  }

  /**
   * sending whole state
   */
  public getState<T>(): T {
    return {...state} as T;
  }

  /**
   * sending get and update state object to reducer
   */
  private get getStateObject(): IState {
    return {
      getState: this.getState,
      updateState: this.updatedState
    };
  }

  private intializeState(key: string, payload: any): void {
    state[key] = payload;
  }

}
