import { Reducer, IReducer, Action, IUpdateState } from 'angular-store-lib-src';

const username: IReducer = {
  key: 'username',
  intialState: ''
};


@Reducer(username)
export class UsernameReducer {
  constructor() {}

  @Action(username.key)
  public onUsernameChange(payload: string, updateState: IUpdateState): void {
    const newData = `${payload}_${new Date()}`;
    updateState({ key: 'username', payload: newData });
  }

}
