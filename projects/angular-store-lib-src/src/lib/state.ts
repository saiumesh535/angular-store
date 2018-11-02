import { Injectable, Inject } from '@angular/core';
import { IReducer, IDispatch, UpdateState, IState, IModuleConfig, IActionMap } from './Types';
import { logState, updateLogStatus } from './Utils';
import { selectorsMap } from './selectors';

// reducer class data
const reducers: IReducer<any>[] = [];

// actions data
const actionsMap = new Map<string, IActionMap>();

// state of the applicaiton
const state = {};


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
  public addActions(type: string, metaData: IActionMap): void {
    actionsMap.set(type, metaData);
  }

  /**
   * sending payload to reducer method with payload if any
   * @param action
   */
  public sendAction<T>(data: IDispatch<T>) {
    // iterate through actions, array to send payload
    const actionData = actionsMap.get(data.type);
    if (!!actionData) {
      actionData.target[actionData.propertyKey](data.payload, this.getStateObject);
    }
  }

  /**
   * updating State
   * @param input
   */
  public updatedState(input: UpdateState<any>): void {
    // check if that key exists in state or not
    if (state[input.key] !== undefined) {
      state[input.key] = input.payload;
      // show updated state in color in console
      logState(state);
      // send data to selectors
      const selector = selectorsMap.get(input.key);
      if (!!selector) {
        selector.next(input.payload);
      }
    }
  }

  /**
   * sending whole state
   */
  public getState(): any {
    return {...state};
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
