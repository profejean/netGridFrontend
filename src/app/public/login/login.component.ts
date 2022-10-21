import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    email: new FormControl(''),
    password: new FormControl(''),
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
          localStorage.setItem('token', data.token);
          if (localStorage.getItem('token')) {
            this.authService.login();
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
