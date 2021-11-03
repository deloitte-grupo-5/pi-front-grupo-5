import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Postagem } from './../models/Postagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  postagemSubject: Subject<Postagem>;
  postagemVisualizar!:Postagem;

  constructor(private http:HttpClient,private router:Router) {
    this.postagemSubject = new Subject();
   }

  getPostagens():Observable<Postagem[]>{
      let url ="http://localhost:8080/posts";
      return this.http.get<Postagem[]>(url);
  }
  visualizar(postagem:Postagem){
    this.postagemVisualizar = postagem;
    this.postagemSubject.next(postagem);
    this.router.navigateByUrl("/view-post")
  }
  getPostagemVisualizar(){
    return this.postagemSubject.asObservable();
  }


}
