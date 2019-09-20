import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/user'
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})

export class SignUpComponent implements OnInit{
  user: User  = {
    name: '',
    password: '',
    email: ''
  };

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }

  submit() {
    console.log(this.form);
  }
}


