import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginFormComponent} from './components/login-form/login-form.component';
import {LoginPageComponent} from './containers/login-page/login-page.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {MaterialModule} from '../material';
import {ReactiveFormsModule} from '@angular/forms';

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('login', reducers)
  ],
  declarations: COMPONENTS
})
export class AuthModule {
}
