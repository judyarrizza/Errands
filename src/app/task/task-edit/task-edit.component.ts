import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { SubTask } from '../subtask/subtask.model';
import { TaskService } from '../task.service';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  @Input() task: Task;
  @Output() endTaskEdit: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private taskService: TaskService, private userService: UserService) {}

  public taskOwnerName;
  public currentUserDisplayName;
  public users = this.userService.users;

  ngOnInit() {
    this.taskOwnerName = this.task.user.fullName;
    this.currentUserDisplayName = this.userService.getCurrentUser().fullName;
  }

  onStartEditTask() {
    if (!this.task.complete) {
      this.taskOwnerName = this.task.user.fullName;
    }
  }

  onSaveEdits() {
    this.task.user = this.userService.findUserByFullname(this.taskOwnerName);
    this.taskService.persistTasks();
    this.endTaskEdit.emit(this.task);
  }

  onCancelEdits() {
    this.taskService.loadTasks();
    this.endTaskEdit.emit(this.task);
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.task);
  }

  onAddSubTask() {
    const subTask: SubTask = new SubTask('New SubTask');
    this.task.subTasks.push(subTask);
  }

  onDeleteSubTask(subTask) {
    this.task.subTasks.splice(this.task.subTasks.indexOf(subTask), 1);
  }

}
