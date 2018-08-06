import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundPageComponent} from './component/not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material';


export const COMPONENTS = [
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
}
