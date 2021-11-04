import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Postagem } from './../models/Postagem';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Comentario } from '../models/Comentario';
// import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  asPostagensMudaram:EventEmitter<null>= new EventEmitter();
  postagemSubject: Subject<Postagem>;
  postagemVisualizar!:Postagem;

  constructor(private http:HttpClient,private router:Router, private matSnackBar:MatSnackBar) {
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
 
  criarPostagem(
    titulo:string, 
    texto:string, 
    comentarios:Comentario[],
    curtidas:number,
    porcao:number,
    preparo:number,
    referencias:string,
    user:Usuario
    ){
    const url = "http://localhost:8080/posts"
    let token = window.sessionStorage.getItem("token");
    let teste ='';
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }

    return this.http.post(url,{titulo,texto,comentarios,curtidas,porcao,preparo,referencias, user},{headers:{Authorization:teste}})
  }

  criarComentario(       
    user:Usuario,
    title:string,
    body:string,
    ) {
      const url = "http://localhost:8080/comentarios"
    let token = window.sessionStorage.getItem("token");
    let teste ='';
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }

    return this.http.post(url,{user, title, body},{headers:{Authorization:teste}})
    
  }

  getComentarios():Observable<Comentario[]>{
    let url ="http://localhost:8080/comentarios";
    return this.http.get<Comentario[]>(url);
}

  showMensage(msg:string){
    this.matSnackBar.open(msg,'',{duration:3000,horizontalPosition:"right",verticalPosition:"top"});
  }

  delete(postagem:Postagem):Observable<any>{
    const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem("token");
    let teste = ''
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }
    let id = postagem.id.toString();
    return this.http.delete(url+`/${id}`,{headers:{Authorization:teste}})
  }


}
