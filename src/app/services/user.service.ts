import { Usuario } from 'src/app/models/usuario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private matSnackBarModule:MatSnackBar) { }
  login(usuario:string,senha:string){
    return this.http.post("http://localhost:8080/usuario/logar",{usuario,senha})
  }

  showMensage(msg:string){
    this.matSnackBarModule.open(msg,'',{duration:3000,horizontalPosition:"right",verticalPosition:"top"});
  }
  cadastrarUsuario(nome:string,email:string,sobrenome:string,telefone:string,senha:string,usuario:string){
    const url = "https://jardim-na-panela.herokuapp.com//usuario/cadastrar"
    //return this.http.post(url,{nome,email,sobrenome,telefone,senha,usuario})
    return this.http.post(url,{nome,email,sobrenome,telefone,senha,usuario})
  }
}
