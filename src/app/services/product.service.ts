
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private matSnackBar:MatSnackBar) { }

  getProducts():Observable<Product[]>{
    const url ="http://localhost:8080/produtos"

    return this.http.get<Product[]>(url);
  }
  criarProduto(nome:string,descricao:string,valor:number,quantidade_estoque:number){
    const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem("token");
    let teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    return this.http.post(url,{descricao,nome,quantidade_estoque,valor},{headers:{Authorization:teste}})
  }
  showMensage(msg:string){
    this.matSnackBar.open(msg,'',{duration:3000,horizontalPosition:"right",verticalPosition:"top"});
  }
  delete(produto:Product):Observable<any>{
    const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem("token");
    let teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    let id = produto.id.toString();
    return this.http.delete(url+`/${id}`,{headers:{Authorization:teste}})
  }


}
