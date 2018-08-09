import { Injectable } from '@angular/core';
import {Authenticate, User} from '../model/auth.model';
import {Observable, of, throwError} from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }
}
