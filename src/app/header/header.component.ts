import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public storage = window.localStorage;

  userLogged(): Boolean {

    if (this.storage.getItem('logged') === 'true') {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

  logout() {
    this.storage.setItem('logged', 'false');
  }

}
