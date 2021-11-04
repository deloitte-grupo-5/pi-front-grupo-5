import { PostagemService } from './../../services/postagem.service';
import { Component, OnInit, Output } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';

@Component({
  selector: 'app-lista-postagem',
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css'],
})
export class ListaPostagemComponent implements OnInit {
  @Output() postagens: Postagem[] = [



  ];
  constructor(private postagemService: PostagemService) {
  }

  getPostagem() {
    this.postagemService.getPostagens().subscribe((postagens: Postagem[]) => {
      this.postagens = postagens
    })
  }

  ngOnInit(): void {
    this.postagemService.getPostagens().subscribe((postagens)=>{
      this.postagens = postagens;
      console.log(postagens)
    });
  }
}

