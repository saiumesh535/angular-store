import { Injectable } from '@angular/core';
import { Store } from './store';
import { IDispatch } from './Types';

@Injectable()
export class Dispatch {
  constructor(private store: Store) {}

  /**
   *dispatching action to
   * @param action Action
   */
  public dispatch(action: IDispatch): void  {
    this.store.sendAction(action);
  }

}
