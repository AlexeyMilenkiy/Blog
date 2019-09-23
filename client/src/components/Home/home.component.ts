import { Component } from '@angular/core';
import {UsersService} from "../../app/shared/services/users.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent {
  desiredUser: string;
  constructor(private users: UsersService){}

  getUsers() {
    let id = parseInt(localStorage.getItem('id'));
    console.log(this.desiredUser);
    this.users.getUsers(this.desiredUser, id);
  }
}
