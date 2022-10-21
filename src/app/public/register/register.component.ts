import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from './../../services/register.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {



  //forma data
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    name: new FormControl('')
  });

  // validate data
  passwordConfirmationValidate = '';
  passwordValidate = '';
  emailValidate = '';
  nameValidate = '';
  messageValidate = '';

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private authService: AuthService
  ) { }


  register() {
    console.log(this.form.value);
    this.registerService.register(this.form.value)
      .subscribe({
        next: (data: any) => {
          console.log(data);
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
          if (err.error.errors) {
            this.nameValidate = err.error.errors.name;
          } else {
            this.nameValidate = ''
          }
          if (err.error.errors) {
            this.passwordConfirmationValidate = err.error.errors.password_confirmation;
          } else {
            this.passwordConfirmationValidate = ''
          }
        }
      });

  }



}
