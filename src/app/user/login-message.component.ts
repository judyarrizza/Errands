import { Component } from '@angular/core';
import { UserService} from './user.service';
import { Router } from '@angular/router';
import {TaskService} from '../task/task.service';


@Component({
  selector: 'app-login-result',
  template: `
    <div *ngIf="!isLoggedIn()" >
      <div class="message" *ngIf="!isLoginError()">
        Please login or create a new user to enter the Errand Tracker. Click <a (click)="onClear()">here</a> 
        to clear all users and tasks for a fresh start.
      </div>
      <div *ngIf="isLoginError()" class="error" >
        No user was found with this username. Please enter a different username or click "New User" to add a user.
      </div>
    </div>
  `,
  styles: [`a { color: inherit; }`]
})
export class LoginMessageComponent {

  constructor(private userService: UserService, private taskService: TaskService, private router: Router) {}

  isLoginError(): boolean {
    return this.userService.isLoginError();
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onClear(): void {
    this.userService.clearUsers();
    this.taskService.clearTasks();
    alert('All users and tasks have been cleared.');
  }
}
