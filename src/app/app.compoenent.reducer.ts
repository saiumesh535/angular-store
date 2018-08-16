import { Reducer, IReducer, Action, IUpdateState, IState } from 'angular-store-lib-src';

const username: IReducer = {
  key: 'username',
  initialState: ''
};


@Reducer(username)
export class UsernameReducer {
  constructor() {}

  @Action(username.key)
  public onUsernameChange(payload: string, state: IState): void {
    const newData = `${payload}_${new Date()}`;
    const currentState = state.getState();
    state.updateState({ key: username.key, payload: newData });
  }

}
