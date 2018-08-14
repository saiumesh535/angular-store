import { Injectable } from '@angular/core';
import { IReducer, IAction, IDispatch, IUpdateState, UpdateState, ISelector } from './Types';
import { selectors } from './selectors';
import { logState } from './Utils';

// reducer class data
const reducers: IReducer[] = [];

// actions data
const actions: IAction[] = [];

// state of the applicaiton
const state = {};


@Injectable()
export class State {


  constructor() { }

  /**
   * adding reducer to array
   * @param reducer
   */
  public addReducer(reducer: IReducer): void {
    reducers.push(reducer);
    // intializing state
    this.intializeState(reducer.key, reducer.intialState);
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
    actions.forEach((action) => {
      if (action.type === data.type) {
        action.target[action.propertyKey](data.payload, this.updatedState);
      }
    });
  }

  public updatedState(input: UpdateState): void {
    // check if that key exists in state or not
    if (state[input.key] !== undefined) {
      state[input.key] = input.payload;
      // show updated state in color in console
      logState(state);
      // iterate through Selctors
      selectors.forEach((selector) => {
        if (selector.key === input.key) {
          selector.subject.next(input.payload);
        }
      });
    }
  }

  private intializeState(key: string, payload: any): void {
    state[key] = payload;
  }

}
