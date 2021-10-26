import { Usuario } from 'src/app/models/usuario';

import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string="";
  senha:string="";
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.login(this.usuario,this.senha).subscribe((token)=>{
      window.sessionStorage.setItem('token', JSON.stringify((<Usuario>token).token))
      console.log(token)
      this.router.navigateByUrl("/produtos")
    });
  }

}
