import {Routes} from '@angular/router';
import {NotFoundPageComponent} from './core/component/not-found-page/not-found-page.component';
import {LoginPageComponent} from './auth/containers/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '**', component: NotFoundPageComponent},
];
