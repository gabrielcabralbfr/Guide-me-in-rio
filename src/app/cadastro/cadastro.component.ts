import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
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

  cadastrar() {
    const storage = window.localStorage;

    storage.setItem('user', JSON.stringify(this.user));

    this.toastr.success('Te levaremos para o login', 'Sucesso',
    {
      positionClass: 'toast-bottom-center',
      closeButton: true,
      easing: 'ease-in',
      progressBar: true,
      tapToDismiss: true
    });

    setTimeout(() => {
    this.router.navigate(['/login']);
    }, 2000);
  }

  ngOnInit() {}
}
