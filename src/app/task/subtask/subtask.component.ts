import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SubTask } from './subtask.model';
import { Task } from '../task.model';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html'
})

export class SubTaskComponent implements OnInit {
  @Input()  task: Task;
  @Input()  subTask: SubTask;
  @Input()  allowEdit: boolean;

  @Output() SubTaskDeleted: EventEmitter<SubTask> = new EventEmitter<SubTask>();
  @Output() SubTaskToggleState: EventEmitter<SubTask> = new EventEmitter<SubTask>();
  @Output() TaskEditRequest: EventEmitter<SubTask> = new EventEmitter<SubTask>();

  public belongsToCurrentUser: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.task.user.userName === this.userService.getCurrentUser().userName) {
      this.belongsToCurrentUser = true;
    } else {
      this.belongsToCurrentUser = false;
    }
  }

  onDeleteSubTask() {
    this.SubTaskDeleted.emit(this.subTask);
  }

  onToggleSubTaskComplete() {
    this.subTask.complete = !this.subTask.complete;
    this.SubTaskToggleState.emit(this.subTask);
  }

  onStartEditTask() {
    this.TaskEditRequest.emit(this.subTask);
  }

}
