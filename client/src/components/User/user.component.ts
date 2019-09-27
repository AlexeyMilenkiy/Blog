import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResponseUser} from "../../interfaces/response-user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})

export class UserComponent {
  @Input() users: ResponseUser[];
  @Output() changed = new EventEmitter();

  changeFollow(user: ResponseUser) {
    this.changed.emit(user)
  }
}
