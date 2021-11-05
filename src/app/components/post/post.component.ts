import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postagem!:any;
  descricao:string =""
  onVisualizarClick:EventEmitter<Postagem> = new EventEmitter();
  constructor(private postService:PostagemService) { }

  ngOnInit(): void {
    console.log(this.postagem)
    let texto:string = this.postagem.texto
    this.descricao = texto.substring(0,60)+"..."
  }

  visualizar(){
    this.postService.visualizar(this.postagem);
  }

}
