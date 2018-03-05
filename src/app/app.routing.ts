import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './task/tasks.component';
import { LoginMessageComponent } from './user/login-message.component';
import { SignupComponent } from './user/signup.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login-message', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'login-message', component: LoginMessageComponent },
  { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
