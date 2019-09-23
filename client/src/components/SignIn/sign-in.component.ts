import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/user';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../app/shared/services/auth.service";
import {Router} from "@angular/router";

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

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

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
    if(this.form.invalid){
      return
    }

    this.user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(this.user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/home'])
    })
  }
}
