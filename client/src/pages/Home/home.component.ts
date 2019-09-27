import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../app/shared/services/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResponseUser} from '../../interfaces/response-user';
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit, OnDestroy {
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  userName: string;
  users: ResponseUser[] = [];
  form: FormGroup;
  activeUserId = parseInt(localStorage.getItem('id'), 10);
  isIncrease = true;
  isEmpty = false;
  isSort = false;
  isError = false;

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
        .pipe(takeUntil(this.destroy))
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
          () => this.isError = true);
    }
  }

  changeStateInArray(id: number) {
    this.users.forEach(item => {
      if (item.id === id) { item.followers =  item.followers ? null : {follower: this.activeUserId}; }
    });
  }

  changeState(user: ResponseUser) {
    if (user.followers) {
      this.usersService.removeSubscription(this.activeUserId, user.id)
        .pipe(takeUntil(this.destroy))
        .subscribe(() => {
          this.changeStateInArray(user.id);
        });
    } else {
      this.usersService.setSubscription(this.activeUserId, user.id)
        .pipe(takeUntil(this.destroy))
        .subscribe(() => {
          this.changeStateInArray(user.id);
        });
    }
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
