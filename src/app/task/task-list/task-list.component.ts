import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { UserService } from '../../user/user.service';

@Component ({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [`
   .filters {
     font-size: 14px;
     margin-left: 40px;
   }`
  ]
})
export class TaskListComponent implements OnInit {
  public tasks: Array<Task> = [];

  public onlyMine = true;
  public onlyIncomplete = true;
  public myUserName;

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnInit() {
    this.myUserName = this.userService.getCurrentUser().userName;
    this.tasks = this.taskService.getTasks();
  }

  onTaskChange() {
    this.tasks = [];
    this.tasks = this.taskService.getTasks();
  }

  onToggleOwnerFilter() {
    this.onlyMine = !this.onlyMine;
  }

  onToggleStatus() {
    this.onlyIncomplete = !this.onlyIncomplete;
  }

  showTask(task): boolean {
   return ((task.user.userName === this.myUserName || !this.onlyMine) && (!task.complete || !this.onlyIncomplete));
  }

}
