import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})

export class TaskComponent {
  @Input() task: Task;
  @Output() change: EventEmitter<Task> = new EventEmitter<Task>();

  public editTask = false;
  constructor(private taskService: TaskService) {}

  onStartTaskEdit() {
    this.editTask = true;
  }

  onEndTaskEdit() {
    this.change.emit();
    this.editTask = false;
  }
}
