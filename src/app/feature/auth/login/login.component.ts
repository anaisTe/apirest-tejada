import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../core/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide: boolean = true;
  authUserSubscription?: Subscription;

  LoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  get mailInputControl() {
    return this.LoginForm.get('email');
  }

  get passwordInputControl() {
    return this.LoginForm.get('password');
  }

  constructor(
    private router: Router,
    private _loginService: LoginService
  ) {}


  goToHome() {
    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
    } else {
      this._loginService.login(this.LoginForm.getRawValue())
      // this.router.navigate(['inicio'])
    }
  }
}
