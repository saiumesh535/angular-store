import { State } from './state';
import { IReducer } from './Types';

let store: State = null;

if (store === null) {
  store = new State(null);
}

/**
 * class decorator, add reducer class to reducers array
 * @param reducerData
 */
export function Reducer<T>(reducerData: IReducer<T>) {
  if (reducerData.initialState === undefined) {
    throw new Error(`initialState of ${reducerData.key} cannot be undefined`);
  }
  store.addReducer(reducerData);
  return function(constructor: Function) {};
}

/**
 * registering method to recieve payload on matched type
 * @param type
 */
export function Action(type: string | string[]) {
  const wtf = function(
    target: Object,
    propertyKey: string,
    descriptionKey: TypedPropertyDescriptor<Function>
  ) {
    const types = typeof type === 'string' ? [type] : type;
    store.addActions(types, {
      target,
      propertyKey,
      descriptionKey
    });
  };
  return wtf;
}
