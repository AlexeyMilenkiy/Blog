import { Component } from '@angular/core';
import {UsersService} from "../../app/shared/services/users.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent {
  userName: string;
  users = [];
  constructor(private usersService: UsersService){}

  getUsers() {
    let id = parseInt(localStorage.getItem('id'));
    this.usersService.getUsers(this.userName, id)
      .subscribe(users => {
        this.users = [...users];
    });
  }
}
