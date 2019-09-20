import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/user';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})

export class SignInComponent implements OnInit{
  user:User = {
      email: '',
      password: ''
  };

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
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
    if(this.form.invalid){
      return
    }

  }
}
