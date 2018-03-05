import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { TaskService } from './task.service';
import { TaskComponent } from './task.component';
import { SubTaskComponent } from './subtask/subtask.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks.component';

import { TaskDisplayComponent } from './task-display/task-display.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    TaskDisplayComponent,
    TaskEditComponent,
    TaskComponent,
    SubTaskComponent,
    TaskListComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  providers: [ TaskService ]
})

export class TaskModule {}
