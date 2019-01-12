import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import * as fromLogin from './store/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/effects/login.effects';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [
    LoginPageComponent, 
    RegistrationPageComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    StoreModule.forFeature('login', fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }
