import { Reducer, IReducer, Action, IUpdateState, IState } from 'angular-store-lib-src';

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
  } as User
};


@Reducer(password)
export class PasswordReducer {
  constructor() { }

  @Action(password.key)
  public onUsernameChange(payload: string, state: IState): void {
    const getCurrentState = state.getState<any>().password as User;
    const updatedData = { ...getCurrentState, username: payload };
    state.updateState({ key: password.key, payload: updatedData });
  }

}
