import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../app/shared/services/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResponseUser} from '../../interface/response-user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  userName: string;
  users: ResponseUser[] = [];
  form: FormGroup;
  activeUserId = parseInt(localStorage.getItem('id'), 10);
  isIncrease = true;
  isEmpty = false;
  isSort = false;
  isModal = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.maxLength(30),
        Validators.minLength(1),
      ]),
    });
  }

  sortArray() {
    this.isIncrease = !this.isIncrease;
    if (this.isIncrease) {
      this.users.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else {
      this.users.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 0 : -1));
    }
  }

  getUsers() {
    this.userName = this.form.value.name.trim();
    this.form.reset();
    this.users.length = 0;
    if (this.userName) {
      this.usersService.getUsers(this.userName, this.activeUserId)
        .subscribe((users: ResponseUser[]) => {
          if (users.length) {
            this.isSort = users.length !== 1;
            this.isEmpty = false;
            users.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            this.users = [...users];
          } else {
            this.isEmpty = true;
          }
        },
          (error) => {
            this.isModal = true
        });
    }
  }

  changeStateInArray(id: number) {
    this.users.forEach(item => {
      if (item.id === id) { item.followers =  item.followers ? null : {follower: id}; }
    });
  }

  changeState(user: ResponseUser) {
    if (user.followers) {
      this.usersService.removeSubscription(user.followers.id)
        .subscribe(() => {
          this.changeStateInArray(user.id);
        });
    } else {
      this.usersService.setSubscription(this.activeUserId, user.id)
        .subscribe(() => {
          this.changeStateInArray(user.id);
        });
    }
  }
}
