import { Subject } from 'rxjs';


export const selectorsMap = new Map<string, Subject<any>>();

/**
 * returns Observable of payload when key of State Changes
 * @param key
 */
export function Selector (key: string) {
  const subject: Subject<any> = new Subject<any>();
  selectorsMap.set(key, subject );
  const wtf = function(target, varName) {
    Object.defineProperty(target, varName, {
      configurable: false,
      get: () => subject
    });
  };
  return wtf;
}
