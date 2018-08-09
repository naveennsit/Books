import {of} from 'rxjs';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';


import {
AuthActions,
Login,
AuthActionsTypes,
LoginSuccess,
LoginFailure
} from '../actions/auth.actions';

import {Authenticate} from '../model/auth.model';
import {AuthService} from '../service/auth.service';
import {AuthState} from '../reducers';

@Injectable()
export class AuthEffect {
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN),
    map((action: Login) => action.payload),
    switchMap((auth: Authenticate) => {
      return this.authService.login(auth).pipe(
        map(user => this.store.dispatch(new LoginSuccess({user}))),
        catchError(error => of(new LoginFailure(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/ac']))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AuthState>
  ) {
  }
}
