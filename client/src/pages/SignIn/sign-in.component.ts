import {Component, OnDestroy, OnInit} from '@angular/core';
import { User } from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../app/shared/services/auth.service';
import {Router} from '@angular/router';
import {ReplaySubject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})

export class SignInComponent implements OnInit, OnDestroy {
  user: User = {
      email: '',
      password: ''
  };
  subscriptions: Subscription = new Subscription();
  form: FormGroup;
  isError = false;

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
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.subscriptions.add(this.auth.login(this.user)
      .subscribe(() => {
      this.form.reset();
      this.router.navigate(['/home']);
    },
      (error) => {
        if(error.status === 0) {
          this.isError = true;
        }
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
