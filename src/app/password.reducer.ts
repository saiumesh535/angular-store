import { Reducer, IReducer, Action, IUpdateState, IState } from 'angular-store-lib-src';

interface User {
  username: string;
  id: number;
  token: string;
}



const password: IReducer = {
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
    const getCurrentState = state.getState().password as User;
    const updatedData = { ...getCurrentState, username: payload };
    state.updateState({ key: password.key, payload: updatedData });
  }

}
