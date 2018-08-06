import {ActionReducerMap} from '@ngrx/store';

import * as authState from './auth.reducer';


export interface AuthState {
  auth: authState.State;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: authState.reducer
};
