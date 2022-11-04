import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthComponent } from './components/auth/auth.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';



@NgModule({
  declarations: [
    AuthButtonComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
  ],
  exports: [
    AuthButtonComponent,
  ]
})
export class Auth0Module { }
