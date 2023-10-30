import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAccountViewComponent } from './views/login-account-view/login-account-view.component';
import { CreateAccountViewComponent } from './views/create-account-view/create-account-view.component';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginAccountViewComponent,
    CreateAccountViewComponent,
    LoginAccountComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginAccountComponent
  ]
})
export class AccountModule { }
