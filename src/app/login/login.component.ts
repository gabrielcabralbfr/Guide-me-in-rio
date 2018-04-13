import { UserService } from './../user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private angularFireAuth: AngularFireAuth,
    private userService: UserService) {

      this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      image: ''
    };
   }
   public storage = window.localStorage;

  ngOnInit() {
    this.userService.userIsLogged();
    // if (this.storage.getItem('logged') === 'true') {
    //   this.router.navigate(['']);
    // }
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

  successCallback(signInSuccessData: FirebaseUISignInSuccess) {
    console.log(signInSuccessData);
    this.userService.login(signInSuccessData.currentUser);
    this.storage.setItem('logged', 'true');
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
    this.router.navigate(['/favorites']);
  }
  firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {

      console.log('AUTH LISTENER EXECUTADO - LOGADO');
      // this.router.navigate(['']);
    } else {
      console.log('Logged out :(');
      this.storage.setItem('logged', 'false');
    }
  }

}
