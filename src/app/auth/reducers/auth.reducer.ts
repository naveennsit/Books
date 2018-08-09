import {User} from '../model/auth.model';
import {AuthActions, AuthActionsTypes} from '../actions/auth.actions';

export interface State {
  loggedIn: boolean;
  user: User | null;
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  loggedIn: false,
  user: null,
  error: null,
  pending: false
};


export function reducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionsTypes.LOGIN :
      return {
        ...state,
        pending: true,
        error: null
      };

    case AuthActionsTypes.LOGIN_SUCCESS :
      return {
        ...state,
        pending: false,
        error: null,
        user: action.payload.user
      };
    case AuthActionsTypes.LOGIN_FAILURE :
      return {
        ...state,
        pending: false,
        error: null,
        user: action.payload.error
      };

    case AuthActionsTypes.LOGOUT :
      return {
        ...state,
        pending: false,
        error: null,
        user: null
      };
      default :
      return state;
  }
}

