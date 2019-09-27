import {Component, OnInit} from '@angular/core';
import { User } from '../../interface/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../app/shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})

export class SignUpComponent implements OnInit {
  user: User  = {
    name: '',
    password: '',
    email: ''
  };

  form: FormGroup;
  isError =  false;

  constructor(
    private auth: AuthService,
    private router: Router) {}

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
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.register(this.user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/']);
    },
      () => this.isError = true
    );
  }
}


