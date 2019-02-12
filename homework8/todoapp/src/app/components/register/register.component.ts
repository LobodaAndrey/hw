import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hero = {
    login: '',
    password: '',
    email: '',
    phone: '',
    name: '',
    surname: ''
  };
  heroForm: FormGroup = new FormGroup({
    'login': new FormControl(this.hero.login, [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]{3,12}')
    ]),
    'name': new FormControl(this.hero.name, [
      Validators.pattern('[a-zA-Z]{2,12}')
    ]),
    'surname': new FormControl(this.hero.surname, [
      Validators.pattern('[a-zA-Z]{2,12}')
    ]),
    'email': new FormControl(this.hero.email, [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]*\@{1}[a-z]*[.]{1}[a-z]{2,4}')
    ]),
    'password': new FormControl(this.hero.password, [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]{6,20}')
    ])
  });
  constructor() {
  }

  ngOnInit() {
  }
}
