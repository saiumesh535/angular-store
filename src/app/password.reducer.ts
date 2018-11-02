import { Reducer, IReducer, Action, IState } from 'angular-store-lib-src';

interface User {
  username: string;
  id: number;
  token: string;
}

interface ILOl {
  key: string;

}



const password: IReducer<User> = {
  key: 'password',
  initialState: {
    username: null,
    id: null,
    token: null
  }
};


@Reducer<User>(password)
export class PasswordReducer {
  constructor() { }

  @Action(password.key)
  public onUsernameChange(passwordPayload: string, state: IState): void {
    state.updateState({ key: password.key, payload: passwordPayload });
  }

}
