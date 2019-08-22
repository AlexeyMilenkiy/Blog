import { Component } from '@angular/core';
import { User } from '../../interface/user'

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})

export class SignUpComponent {
  user: User  = {
    name: '',
    password: '',
    email: ''
  };

  showUser(e) {
    e.preventDefault();
    console.log(this.user);
  }
}


