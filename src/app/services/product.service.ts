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
  criarProduto(nome:string,descricao:string,valor:number,quantidade_estoque:number){
    const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem('token');
    console.log(token)
    return this.http.post(url,{descricao,nome,quantidade_estoque,valor},{headers:{Authorization:`${token}`}})
  }



}
