import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../app/shared/services/users.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResponseUser} from "../../interface/response-user";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit{
  userName: string;
  users: ResponseUser[] = [];
  form: FormGroup;
  activeUserId = parseInt(localStorage.getItem('id'));

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.maxLength(30),
        Validators.minLength(1),
      ]),
    });
  }

  getUsers() {
    this.userName = this.form.value.name.trim();
    this.form.reset();
    if(this.userName) {
      this.usersService.getUsers(this.userName, this.activeUserId)
        .subscribe(users => {
          console.log(users);
          this.users = [...users];
        });
    }
  }

  changeStateInArray(id: number) {
    this.users.forEach(item => {
      if(item.id === id) item.follower =  item.follower ? null : {id: id}
    });
  }

  changeState(user: ResponseUser) {

    if(user.follower) {
      this.usersService.removeSubscription(user.follower.id)
        .subscribe(() => {
          this.changeStateInArray(user.id)
        })
      //delete follow
    } else {
      //add follow
      this.usersService.setSubscription(this.activeUserId, user.id)
        .subscribe(() => {
          this.changeStateInArray(user.id)
        })
    }
  }
}
