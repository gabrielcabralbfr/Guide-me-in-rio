import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../cadastro/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(private router: Router,
              private toastr: ToastrService) {
    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    };
   }
   public storage = window.localStorage;

  ngOnInit() {

  }

  login() {

    const userStored = JSON.parse(this.storage.getItem('user'));

    if (this.checkCredentials(this.user, userStored) === true) {
      this.storage.setItem('logged', 'true');
      this.router.navigate(['']);
    } else {
      this.toastr.error('Credenciais incorretas', 'Erro!', {timeOut: 2500, positionClass: 'toast-bottom-center'});
      this.storage.setItem('logged', 'false');

    }

  }

  checkCredentials(loggingUser, storedUser): Boolean {
    if ((loggingUser.email === storedUser.email)
    && (loggingUser.password === storedUser.password)) {
      return true;
    }

    return false;
  }

}
