import {User} from './user.model';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  public users: User[] = [];
  public currentUser: User = null;
  public loginError = false;

  constructor( ) {
    this.loadUsers();
    this.loadCurrentUser();
  }

  clearUsers() {
    this.logout();
    this.users = [];
    localStorage.setItem('ja.demo.errands.users', JSON.stringify(this.users));
  }

  loadUsers() {
    const storedUsers = localStorage.getItem('ja.demo.errands.users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = [];
    }
  }

  loadCurrentUser() {
    const storedUser = localStorage.getItem('ja.demo.errands.currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    } else {
      this.currentUser = null;
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  findUserRecord(value: string, byField: string): User {
    for (const user of this.users) {
      if (value === user[byField]) {
        return user;
      }
    }
    return null;
  }

  findUserByUsername(userName: string): User {
    return this.findUserRecord(userName, 'userName');
  }

  findUserByFullname(fullName: string): User {
    return this.findUserRecord(fullName, 'fullName');
  }

  signup(user: User) {
    this.users.push(user);
    localStorage.setItem('ja.demo.errands.users', JSON.stringify(this.users));
    this.login(user.userName);
  }

  login(username: string): void {
    this.loadUsers();
    this.currentUser = this.findUserByUsername(username);
    if (this.currentUser) {
      localStorage.setItem('ja.demo.errands.currentUser', JSON.stringify(this.currentUser));
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }

  logout(): void {
    this.currentUser = null;
    this.loginError = false;
    localStorage.removeItem('ja.demo.errands.currentUser');
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  isLoginError(): boolean {
    return this.loginError;
  }

}
