import { Injectable } from '@angular/core';
import { State } from './state';
import { IDispatch } from './Types';

@Injectable()
export class Store {
  constructor(private state: State) {}

  /**
   * dispatching action, @Action decorator function will be called
   * when it matches type
   * @param action Action
   */
  public dispatch<T>(action: IDispatch<T>): void  {
    this.state.sendAction<T>(action);
  }

  /**
   * getting snapshot of state
   */
  public getSnapShot<T>(): T {
    return this.state.getState<T>();
  }

}
