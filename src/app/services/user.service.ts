import { Usuario } from 'src/app/models/usuario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  login(usuario:string,senha:string){
    return this.http.post("http://localhost:8080/usuario/logar",{usuario,senha})
  }
  cadastrarUsuario(nome:string,email:string,sobrenome:string,telefone:string,senha:string,usuario:string){
    const url = "http://localhost:8080/usuario/cadastrar"
    //return this.http.post(url,{nome,email,sobrenome,telefone,senha,usuario})
    return this.http.post(url,{nome,email,sobrenome,telefone,senha,usuario})
  }
}
