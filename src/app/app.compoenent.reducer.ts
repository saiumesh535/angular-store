import { Reducer, IReducer, Action, IState } from 'angular-store-lib-src';

const username: IReducer<string> = {
  key: 'username',
  initialState: ''
};


@Reducer<string>(username)
export class UsernameReducer {
  constructor() {}

  @Action(username.key)
  public onUsernameChange(payload: string, state: IState): void {
    const newData = `${payload}_${new Date()}`;
    state.updateState({ key: username.key, payload: newData });
  }

}
