
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  nome:string=""
  email:string=""
  sobrenome:string =""
  telefone:string=""
  senha:string=""
  usuario:string=""
  erros:string[]= [];

  constructor(private service:UserService,private router:Router) {

  }
  ngOnInit(): void {
  }

  cadastrarUsuario(){
    this.erros=[]
    let validacao = true;
    if(this.nome == ""){
      validacao = false
      this.erros.push("Preencha o campo Nome")
    }

    if(this.email==""){
      this.erros.push("Preencha o campo Email")
    }
    if(this.sobrenome == ""){
      validacao = false
      this.erros.push("Preencha o campo Sobrenome")
    }

    if(this.usuario==""){
      this.erros.push("Preencha o campo Usuário")
    }
    if(this.senha==""){
      this.erros.push("Preencha o campo Senha")
    }





    if(validacao){
    this.service.cadastrarUsuario(this.nome,this.email,
      this.sobrenome,this.telefone,this.senha,this.usuario).subscribe(
        (dados)=> {window.sessionStorage.setItem('token',((<Usuario>dados).token))
        this.service.showMensage("Cadastro realizado com sucesso!");
        this.router.navigateByUrl("/login")
        }
        ,
        error=> this.service.showMensage("Erro! Não foi possivel cadastrar usuário!")
        );
  }
}
}
