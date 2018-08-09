import {Action} from '@ngrx/store';
import {Authenticate, User} from '../model/auth.model';

export enum AuthActionsTypes {
  LOGIN = '[Auth] login',
  LOGOUT = '[Auth] logout',
  LOGIN_SUCCESS = '[Auth] login_success',
  LOGIN_FAILURE = '[Auth] login_failure'
}


export class Login implements Action {
  readonly type = AuthActionsTypes.LOGIN;

  constructor(public payload: Authenticate) {
  }
}

export class Logout implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionsTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {
  }

}

export class LoginFailure implements Action {
  readonly type = AuthActionsTypes.LOGIN_FAILURE;

  constructor(public payload: any) {
  }

}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;
