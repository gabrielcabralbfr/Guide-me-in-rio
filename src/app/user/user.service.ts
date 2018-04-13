import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
  user: User;
  isLogged: Boolean;
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
  }
  cadastrar(user: User): void {
    this.user = user;
    const storage = window.localStorage;

    storage.setItem('user', JSON.stringify(this.user));

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
    console.log('A URL DA FOTO FICOU: ' + this.user.image);
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
