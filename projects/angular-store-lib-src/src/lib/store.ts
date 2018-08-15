import { Injectable } from '@angular/core';
import { State } from './state';
import { IDispatch } from './Types';

@Injectable()
export class Store {
  constructor(private state: State) {}

  /**
   *dispatching action to
   * @param action Action
   */
  public dispatch(action: IDispatch): void  {
    this.state.sendAction(action);
  }

  /**
   * getting snapshot of state
   */
  public getSnapShot(): any {
    return this.state.getState();
  }

}
