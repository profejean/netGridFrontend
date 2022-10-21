import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { LoginService } from './../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //forma data
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  // validate data
  passwordValidate = '';
  emailValidate = '';
  messageValidate = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) { }


  login() {

    this.loginService.login(this.form.value)
      .subscribe({
        next: (data: any) => {
          this.authService.login();
          localStorage.setItem('token', data.token);
          if (localStorage.getItem('token')) {
            this.router.navigate([''])
              .then(() => {
              window.location.reload();
            });
          } else {
            this.messageValidate = 'No hubo una conexión';
          }

        },
        error: (err) => {

          this.messageValidate = err.error.message;

          if (err.error.errors) {
            this.passwordValidate = err.error.errors.password;
          } else {
            this.passwordValidate = ''
          }
          if (err.error.errors) {
            this.emailValidate = err.error.errors.email;
          } else {
            this.emailValidate = ''
          }
        }
      });

  }



}
