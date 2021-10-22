import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  getProdutos():Observable<Produto[]>{
    let url = "http://localhost:8080/produto";
    return this.http.get<Produto[]>(url);

  }
}
