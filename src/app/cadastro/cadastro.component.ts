import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user/user.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      image: ''
    };
  }

  ngOnInit() {}

  cadastrar() {
    this.userService.cadastrar(this.user);
  }
}
