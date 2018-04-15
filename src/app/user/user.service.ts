import { storage } from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService implements CanActivate {
  user: User;
  isLogged: Boolean;


  canActivate(): boolean {
    if (this.userIsLogged()) {
      this.router.navigate(['/favorites']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return true;
    }
  }

  constructor(private router: Router,
              private toastr: ToastrService,
              private angularFireAuth: AngularFireAuth
  ) {
    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      image: ''
    };
    const localStorage = window.localStorage;
    this.isLogged = localStorage.getItem('logged') === 'true' ? true : false;
  }
  cadastrar(user: User): void {
    this.user = user;
    const localStorage = window.localStorage;

    localStorage.setItem('user', JSON.stringify(this.user));

    this.toastr.success('Cadastrado!', 'Sucesso', {
      positionClass: 'toast-bottom-center',
      closeButton: false,
      easing: 'ease-in',
      progressBar: true,
      tapToDismiss: true
    });

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  login(user: any): void {
    this.isLogged = true;
    this.user.image = user.photoURL;
  }

  logout(): void {
    this.angularFireAuth.auth.signOut().then(() => {
      this.isLogged = false;
    });
  }

  userIsLogged(): Boolean {
    return this.isLogged;
  }

  getUrlImage(): string {
    return this.user.image;
  }

  setUrlImage(imgString: string): void {
    this.user.image = imgString;
  }

}
