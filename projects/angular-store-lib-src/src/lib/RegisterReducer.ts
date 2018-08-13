import { Store } from './store';
import { IReducer } from './Types';


let store: Store = null;

if (store === null) {
  store = new Store();
}

/**
 * class decorator, add reducer class to reducers array
 * @param reducerData
 */
export const Reducer = (reducerData: IReducer) =>  {
  store.addReducer(reducerData);
  return function (constructor: Function) {
  };
};

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


