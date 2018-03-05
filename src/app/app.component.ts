import {Component, OnInit} from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.task-section{ max-height: 80vh; overflow: auto; }`]
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/tasks');
    } else {
      this.router.navigateByUrl('/login-message');
    }
  }


}
