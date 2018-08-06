import {Action} from '@ngrx/store';
import {Authenticate} from '../model/auth.model';

export enum AuthActionsTypes {
  LOGIN = '[Auth] login',
  LOGOUT = '[Auth] logout'
}


export class Login implements Action {
  readonly type = AuthActionsTypes.LOGIN;

  constructor(public payload: Authenticate) {
  }
}

export class Logout implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}

export type AuthActions =
  | Login
  | Logout;
