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
    comentários:0,
    curtidas:0,
    data:"sssss",
    porcao:5,
    preparo:6,
    referencias:"555",
    texto:"5555",
    titulo:"5555",
    user:{ nome:"5555",
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


    })
  }

}
