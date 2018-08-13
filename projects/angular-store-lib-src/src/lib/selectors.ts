import { of, Observable, Subject } from 'rxjs';
import { ISelector } from './Types';


export const selectors: ISelector[] = [];


/**
 * this is selector code
 */

export const Selector = (key: string) => {
  const subject: Subject<any> = new Subject<any>();
  return function(target, varName) {
    selectors.push({ key, subject });
    Object.defineProperty(target, varName, {
      configurable: false,
      get: () => subject
    });
  };
};



