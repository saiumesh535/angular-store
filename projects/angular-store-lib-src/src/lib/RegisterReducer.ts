import { State } from './state';
import { IReducer } from './Types';


let store: State = null;

if (store === null) {
  store = new State();
}

/**
 * class decorator, add reducer class to reducers array
 * @param reducerData
 */
export const Reducer = (reducerData: IReducer) => {
  if (reducerData.intialState === undefined) {
    throw new Error(`IntialState of ${reducerData.key} cannot be undefined`);
  }
  store.addReducer(reducerData);
  return function (constructor: Function) {
  };
};

/**
 * registering method to recieve payload on matched type
 * @param type
 */
export const Action = (type: string) => {
  return function (target: Object, propertyKey: string, descriptionKey: TypedPropertyDescriptor<Function>) {
    store.addActions({
      type,
      target,
      propertyKey,
      descriptionKey
    });
  };
};


