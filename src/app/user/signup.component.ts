import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const user = new User(
      this.signupForm.value.userName,
      this.signupForm.value.firstName,
      this.signupForm.value.lastName,
    );
    this.userService.signup(user);
    this.userService.login(user.userName);
    this.router.navigateByUrl('/tasks');
  }

  onCancel() {
    this.signupForm.reset();
    this.router.navigateByUrl('/login-message');
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
    });
  }


}
