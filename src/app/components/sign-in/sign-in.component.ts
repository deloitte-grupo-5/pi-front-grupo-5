import { Usuario } from 'src/app/models/Usuario';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  errosNome:string[]= [];
  errosSobrenome:string[]= [];
  errosTelefone:string[]= [];
  errosUsuario:string[]= [];
  errosEmail:string[]= [];
  errosSenha:string[]= [];

  constructor(private service:UserService,private router:Router) {

  }
  ngOnInit(): void {
    window.scrollTo({ top: 0})
  }
  
  cadastrarUsuario(){
    this.errosNome = [];
    this.errosSobrenome = [];
    this.errosTelefone = [];
    this.errosUsuario = [];
    this.errosEmail = [];
    this.errosSenha = [];
    let validacao = true;

    if(this.nome == ""){
      validacao = false
      this.errosNome.push("• Preencha o campo Nome")
    }
    if(this.nome.length>100){
      validacao = false
      this.errosNome.push("• Máximo 100 cacteres")
    }
    if(this.sobrenome == ""){
      validacao = false
      this.errosSobrenome.push("• Preencha o campo Sobrenome")
    }
    if(this.usuario==""){
      validacao = false
      this.errosUsuario.push("• Preencha o campo Usuário")
    }
    if(this.usuario != "" && this.usuario.length<5){
      validacao = false
      this.errosUsuario.push("• Mínimo 5 caracteres")
    }
    if(this.usuario.length>100){
      validacao = false
      this.errosUsuario.push("• Máximo 100 cacteres")
    }
    if(this.email==""){
      this.errosEmail.push("• Preencha o campo Email")
    }
    if(this.email.length>100){
      validacao = false
      this.errosEmail.push("• Máximo 100 cacteres")
    }
    if(this.senha==""){
      validacao = false
      this.errosSenha.push("• Preencha o campo Senha")
    }
    if(this.senha != "" && this.senha.length<5){
      validacao = false
      this.errosSenha.push("• Mínimo 5 caracteres")
    }
    if(this.senha.length>100){
      validacao = false
      this.errosSenha.push("• Máximo 100 cacteres")
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
