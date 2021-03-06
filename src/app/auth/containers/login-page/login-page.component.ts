import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Authenticate} from '../../model/auth.model';
import {Store} from '@ngrx/store';
import {AuthState} from '../../reducers';
import * as Authctions from '../../actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private store: Store<AuthState>) {
  }

  ngOnInit() {
  }

  onLoginButtonClick(user: Authenticate) {
    this.store.dispatch(new Authctions.Login(user));
  }

}
