import { Injectable, Inject } from '@angular/core';
import { IReducer, IAction, IDispatch, IUpdateState, UpdateState, ISelector, IState, IModuleConfig } from './Types';
import { selectors } from './selectors';
import { logState, updateLogStatus } from './Utils';

// reducer class data
const reducers: IReducer[] = [];

// actions data
const actions: IAction[] = [];

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
  public addReducer(reducer: IReducer): void {
    reducers.push(reducer);
    // intializing state
    this.intializeState(reducer.key, reducer.initialState);
  }

  /**
   * adding actions to array
   * @param action
   */
  public addActions(action: IAction): void {
    actions.push(action);
  }

  /**
   * sending payload to reducer method with payload if any
   * @param action
   */
  public sendAction(data: IDispatch) {
    // iterate through actions, array to send payload
    const actionsLenght = actions.length;
    for (let i = 0; i < actionsLenght; i++) {
      const action = actions[i];
      if (action.type === data.type) {
        action.target[action.propertyKey](data.payload, this.getStateObject);
      }
    }
  }

  /**
   * updating State
   * @param input
   */
  public updatedState(input: UpdateState): void {
    // check if that key exists in state or not
    if (state[input.key] !== undefined) {
      state[input.key] = input.payload;
      // show updated state in color in console
      logState(state);
      // iterate through Selctors ans send values
      const selectorLenght = selectors.length;
      for (let i = 0; i < selectorLenght; i++) {
        const selector = selectors[i];
        if (selector.key === input.key) {
          selector.subject.next(input.payload);
        }
      }
    }
  }

  /**
   * sending whole state
   */
  public getState() {
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
