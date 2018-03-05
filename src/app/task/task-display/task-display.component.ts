import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['task-display.component.css']
})

export class TaskDisplayComponent implements OnInit {
  @Input() task: Task;
  @Output() startTaskEdit: EventEmitter<Task> = new EventEmitter<Task>();

  public users = this.userService.users;
  public belongsToCurrentUser: boolean;

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnInit() {
    if (this.task.user.userName === this.userService.getCurrentUser().userName) {
      this.belongsToCurrentUser = true;
    } else {
      this.belongsToCurrentUser = false;
    }
  }

  onStartEditTask() {
    if (!this.task.complete) {
      this.startTaskEdit.emit(this.task);
    }
  }

  onToggleComplete() {
    this.task.complete = !this.task.complete;
    for (const subTask of this.task.subTasks) {
      subTask.complete = this.task.complete;
    }
  }

  checkIfTaskComplete() {
    let complete = true;
    for (const subTask of this.task.subTasks) {
      if (!subTask.complete) {
        complete = false;
      }
      this.task.complete = complete;
    }
  }

  onToggleOpen() {
    this.task.isOpen = !this.task.isOpen;
  }

  onEditRequest() {
    this.onStartEditTask();
  }

}
