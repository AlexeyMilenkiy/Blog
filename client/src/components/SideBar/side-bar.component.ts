import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../app/shared/services/auth.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  name: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.name = localStorage.getItem('name')
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
