
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  onProdutosMudaram:EventEmitter<null>= new EventEmitter();
  // private readonly url = "https://api-jardimnapanela.herokuapp.com";
  private readonly url = "http://191.252.203.182:8080";
  // private readonly url = "http://localhost:8080";


  constructor(private http:HttpClient,private matSnackBar:MatSnackBar) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/produtos`);
  }
  criarProduto(produto:any){
    let token = window.sessionStorage.getItem("token");
    let teste ='';
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }


    return this.http.post(`${this.url}/produtos`,produto,{headers:{Authorization:teste}})
  }

  showMensage(msg:string){
    this.matSnackBar.open(msg,'',{duration:3000,horizontalPosition:"right",verticalPosition:"top"});
  }

  delete(produto:Product):Observable<any>{
    // const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem("token");
    let teste = ''
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }
    let id = produto.id.toString();
    return this.http.delete(`${this.url}/produtos/${id}`,{headers:{Authorization:teste}})
  }

  update(produto:Product){
    // const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem("token");
    let teste = ''
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }
    console.log(produto)
    return this.http.put(`${this.url}/produtos`,produto,{headers:{Authorization:teste}})
  }

  procurarProduto(descricao:string){
    let token = window.sessionStorage.getItem("token");
    let teste = ''
    if(token) {
      teste = token!.replace(/"([^"]+(?="))"/g, '$1');
    }
    console.log(`${this.url}/produtos/descricao/${descricao}`)
    this.getProducts();
    return this.http.get<Product[]>(`${this.url}/produtos/descricao/${descricao}`,{headers:{Authorization:teste}});
  }
}
