import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../app/shared/services/users.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit{
  userName: string;
  users = [];
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
      if(item.id === id) item.follower =  item.follower ? null : {following: id}
    });
  }

  changeState(followerId: number, subscription) {

    if(subscription) {
      this.usersService.removeSubscription(subscription.id)
        .subscribe(() => {
          this.changeStateInArray(followerId)
        })
      //delete follow
    } else {
      //add follow
      this.usersService.setSubscription(this.activeUserId, followerId)
        .subscribe(() => {
          this.changeStateInArray(followerId)
        })
    }
  }
}
