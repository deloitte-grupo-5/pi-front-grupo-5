import { MatPaginatorIntl } from '@angular/material/paginator';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  liked= true;
  @Input() postagem!:any;
  descricao:string =""
  onVisualizarClick:EventEmitter<Postagem> = new EventEmitter();
  constructor(private postService:PostagemService,private teste: MatPaginatorIntl) {
    teste.nextPageLabel = 'Proxima pagina';
    teste.itemsPerPageLabel = 'Itens por pagina';
    teste.previousPageLabel = 'Pagina anterior';
  }

  ngOnInit(): void {
    console.log(this.postagem)
    let texto:string = this.postagem.texto
    this.descricao = texto.substring(0,60)+"..."
  }

  visualizar(){
    this.postService.visualizar(this.postagem);
  }

}
