import { environment } from './../../../environments/environment';
import { EditUserService } from './../../services/edit-user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UpdateUserService } from './../../services/update-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  id = environment.userId;

  ngOnInit(): void {
    this.edit();
  }

  //forma data
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    address: new FormControl("", [Validators.maxLength(225)]),
    birthdate: new FormControl(""),
    city: new FormControl("", [Validators.maxLength(50)])
  });

  // validate data
  emailValidate = '';
  nameValidate = '';
  cityValidate = '';
  birthdateValidate = '';
  addressValidate = '';
  messageValidate = '';

  constructor(
    private updateService: UpdateUserService,
    private editService: EditUserService

  ) { }

  edit() {

    this.editService.edit(this.id)
      .subscribe({
        next: (data: any) => {

          this.form.setValue({
            email: data.data.email,
            name: data.data.name,
            address: data.data.address,
            birthdate: data.data.birthdate,
            city: data.data.city,

          });

        },
        error: (err) => {

          this.messageValidate = err.error.message;
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
            this.addressValidate = err.error.errors.address;
          } else {
            this.addressValidate = ''
          }
          if (err.error.errors) {
            this.birthdateValidate = err.error.errors.birthdate;
          } else {
            this.birthdateValidate = ''
          }
          if (err.error.errors) {
            this.cityValidate = err.error.errors.city;
          } else {
            this.cityValidate = ''
          }

        }
      });
  }

  update() {

    this.updateService.update(this.form.value,this.id)
      .subscribe({
        next: (data: any) => {
          this.messageValidate = data.message;
        },
        error: (err) => {

          this.messageValidate = err.error.message;


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
            this.addressValidate = err.error.errors.address;
          } else {
            this.addressValidate = ''
          }
          if (err.error.errors) {
            this.birthdateValidate = err.error.errors.birthdate;
          } else {
            this.birthdateValidate = ''
          }
          if (err.error.errors) {
            this.cityValidate = err.error.errors.city;
          } else {
            this.cityValidate = ''
          }

        }
      });

  }

}
