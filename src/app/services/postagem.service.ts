import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Postagem } from './../models/Postagem';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Comentario } from '../models/Comentario';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  asPostagensMudaram: EventEmitter<null> = new EventEmitter();

  postagemVisualizar!: Postagem;
  public postagem = new BehaviorSubject<any>({});
  // private readonly url = 'https://api-jardimnapanela.herokuapp.com';
  private readonly url = "http://191.252.203.182:8080";

  constructor(
    private http: HttpClient,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  getPostagens(): Observable<Postagem[]> {
    // let url ="http://localhost:8080/posts";
    return this.http.get<Postagem[]>(this.url + '/posts');
  }
  visualizar(postagem: Postagem) {
    this.postagem.next(postagem);
    this.router.navigateByUrl('/view-post');
  }
  getPostagemVisualizar() {
    return this.postagem.asObservable();
  }

  criarPostagem(
    titulo: string,
    texto: string,
    comentarios: Comentario[],
    curtidas: number,
    porcao: number,
    preparo: number,
    referencias: string,
    user: Usuario,
    ingredientes: string[],
    img: string
  ) {
    console.log({
      titulo: titulo,
      texto: texto,
      comentarios: comentarios,
      curtidas: 10,
      porcao: 10,
      preparo: 10,
      referencias: referencias,
      user: user,
      ingredientes: ingredientes,
      img: img,
    });
    // const url = "http://localhost:8080/posts"
    let token = window.sessionStorage.getItem('token');
    let teste = '';
    if (token) {
      teste = token!.replace(/"([^"]+(?="))"/g, '$1');
    }

    return this.http.post(
      this.url + '/posts',
      {
        titulo,
        texto,
        comentarios,
        curtidas,
        porcao,
        preparo,
        referencias,
        user,
        ingredientes,
        img,
      },
      { headers: { Authorization: teste } }
    );
  }

  criarComentario(user: Usuario, title: string, body: string, post: any) {
    let token = window.sessionStorage.getItem('token');
    let teste = '';
    if (token) {
      teste = token!.replace(/"([^"]+(?="))"/g, '$1');
    }

    return this.http.post(
      this.url,
      { user, title, body, post },
      { headers: { Authorization: teste } }
    );
  }

  getComentarios(): Observable<Comentario[]> {
    // let url ="http://localhost:8080/comentarios";
    return this.http.get<Comentario[]>(this.url + '/comentarios');
  }

  showMensage(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  delete(postagem:Postagem):Observable<any>{
    // const url = "http://localhost:8080/produtos"
    let token = window.sessionStorage.getItem("token");
    let teste = ''
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }
    let id = postagem.id.toString();
    return this.http.delete(this.url +"/produtos"+`/${id}`,{headers:{Authorization:teste}})
  }

  update(postagem:Postagem){
    let token = window.sessionStorage.getItem("token");
    let teste = ''
    if (token){
      teste =token!.replace(/"([^"]+(?="))"/g, '$1');
    }
    return this.http.put(`${this.url}/posts`,postagem,{headers:{Authorization:teste}})
  }
}
