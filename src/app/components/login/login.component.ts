
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string="";
  senha:string="";

  usuarioLogado!:any;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.login(this.usuario,this.senha).subscribe((token)=>{

      this.usuarioLogado= token;
      window.sessionStorage.setItem('token', JSON.stringify(this.usuarioLogado.token))
      this.service.showMensage("Sucesso no login!");
      this.router.navigateByUrl("/")
      this.service.logar(this.usuarioLogado);

    },
    error => {this.service.showMensage("Falha no login!");}
    );
  }


}
