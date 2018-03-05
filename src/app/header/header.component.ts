import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public userName;

  constructor(public userService: UserService, private router: Router) {}

  onKeydown(event) {
    if (event.code === 'Enter') {
      this.onLogin();
    } else {
      this.userService.loginError = false;
    }
  }

  onSignup() {
    this.userName = '';
    this.router.navigateByUrl('/signup');
  }

  onLogout() {
    this.userService.logout();
    this.userName = '';
    this.router.navigateByUrl('/login-message');
  }

  onLogin() {
    this.userService.login(this.userName);
    if (this.userService.isLoggedIn()) {
       this.router.navigateByUrl('/tasks');
    }
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

}
