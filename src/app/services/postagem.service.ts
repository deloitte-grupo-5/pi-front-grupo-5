import { Observable } from 'rxjs';
import { Postagem } from './../models/Postagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  getPostagens():Observable<Postagem[]>{
      let url ="http://localhost:8080/postagem";
      return this.http.get<Postagem[]>(url);
  }
}
