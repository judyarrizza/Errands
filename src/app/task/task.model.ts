import { User } from '../user/user.model';
import { SubTask } from './subtask/subtask.model';

export class Task {
  title: string;
  user: User;
  subTasks: Array<SubTask>;
  complete: boolean;
  isOpen: boolean;

  constructor(title: string,
              user: User,
              subTasks?: Array<SubTask>,
              complete?: boolean,
              isOpen?: boolean
              ) {

    this.title = title;
    this.user = user;
    this.subTasks = subTasks || [];
    this.complete = complete || false;
    this.isOpen = isOpen || false;
  }
}
