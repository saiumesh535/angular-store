import { Subject } from 'rxjs';

export interface ISelectorMap {
  key: string;
  subject: Subject<any>;
}


export const selectorsMap: ISelectorMap[] = [];

/**
 * returns Observable of payload when key of State Changes
 * @param key
 */
export function Selector (key: string) {
  const subject: Subject<any> = new Subject<any>();
  selectorsMap.push({
    key,
    subject
  });
  const wtf = function(target, varName) {
    Object.defineProperty(target, varName, {
      configurable: false,
      get: () => subject
    });
  };
  return wtf;
}
