import { Component } from '@angular/core';
import { User } from '../../interface/user';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})

export class SignInComponent {
  user:User = {
      email: '',
      password: ''
  };

  showUser () {
    console.log(this.user);
  }
}
