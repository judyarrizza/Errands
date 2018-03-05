import { Component } from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="col-md-10 col-md-offset-1">
        <app-task-list></app-task-list>
    </div>
    <div class="col-md-10 col-md-offset-1 indent">
      <a (click)="addTask()">+ Add Task</a>
    </div>
  `
})
export class TasksComponent {
  constructor(private taskService: TaskService, private userService: UserService) {}

  addTask() {
    this.taskService.addTask(new Task('New Task', this.userService.currentUser));
  }

}

