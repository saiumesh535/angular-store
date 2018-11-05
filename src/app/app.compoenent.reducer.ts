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
    console.log('username changed username');
    state.updateState({ key: 'username', payload: newData });
  }

  @Action('password')
  public onPasswordChanged(passwordPayload: string, state: IState): void {
    state.updateState({ key: 'password', payload: passwordPayload });
  }

  @Action(['username', 'password'])
  public onAllChanges(payload: string, state: IState): void {
    console.log('all changes', {payload});
  }

}
