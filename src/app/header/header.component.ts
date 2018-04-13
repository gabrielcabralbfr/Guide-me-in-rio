import { UserService } from './../user/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  photo = this.userService.getUrlImage();

  constructor(private userService: UserService) { }
  public storage = window.localStorage;

  userIsLogged(): Boolean {

    return this.userService.userIsLogged();
  }

  ngOnInit() {
    this.userIsLogged();

    const user = JSON.parse(this.storage.getItem('firebaseui::rememberedAccounts'));

    this.photo = user[0].photoUrl;
  }

  logout() {
    this.storage.setItem('logged', 'false');
    this.userService.logout();
  }

}
