import { Task } from '../task.model';

export class SubTask {
  title: string;
  complete: boolean;

  constructor(title: string,
              complete?: boolean,
  ) {
    this.title = title;
    this.complete = complete || false;
  }
}
