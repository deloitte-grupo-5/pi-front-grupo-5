import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    const url ="http://localhost:8080/produtos"

    return this.http.get<Product[]>(url);
  }

  cadastrarUsuario(nome:string,email:string,sobrenome:string,telefone:string,senha:string,usuario:string){
    const url = "http://localhost:8080/usuario/cadastrar"
    return this.http.post(url,{nome,email,sobrenome,telefone,senha,usuario})
  }
  login(usuario:string,senha:string){
    return this.http.post("http://localhost:8080/usuario/logar",{usuario,senha})
  }
}
