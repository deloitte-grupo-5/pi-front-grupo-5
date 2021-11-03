import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {
  postagem:Postagem = {id: 0,
    comentarios:[{title:"55",body:"muito boa",usuario:{id:1,nome:"55555",usuario:"5555",senha:"5555",token:"555"}}],
    curtidas:0,
    data:  new Date(),
    porcao:5,
    preparo:6,
    referencias:"555",
    texto:"5555",
    titulo:"5555",
    user:{ 
      id: 1,
      nome:"5555",
    usuario:"5555",
    senha:"5555",
    token:"555"}
  };
  visualizar = false;
  constructor(private service:PostagemService) { }

  ngOnInit(): void {
    this.service.getPostagens().subscribe((postagem:Postagem[])=>{
      this.visualizar = true;
      this.postagem = postagem[0];
      console.log(postagem)
    })
  }

}
