import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { SignupComponent } from './user/signup.component';
import { LoginMessageComponent } from './user/login-message.component';
import { HeaderComponent } from './header/header.component';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginMessageComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    TaskModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
