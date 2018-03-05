import { Task } from './task.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  public tasks: Task[];

  constructor( ) {
    this.loadTasks();
  }

  getTasks() {
    return this.tasks;
  }

  loadTasks() {
    const storedTasks = localStorage.getItem('ja.demo.errands.tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = [];
    }
  }

  persistTasks() {
    localStorage.setItem('ja.demo.errands.tasks', JSON.stringify(this.tasks));
  }

  addTask(task: Task) {
    this.tasks.push(task);
    localStorage.setItem('ja.demo.errands.tasks', JSON.stringify(this.tasks));
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    localStorage.setItem('ja.demo.errands.tasks', JSON.stringify(this.tasks));
  }

  clearTasks() {
    this.tasks = [];
    localStorage.setItem('ja.demo.errands.tasks', JSON.stringify(this.tasks));
  }

}
