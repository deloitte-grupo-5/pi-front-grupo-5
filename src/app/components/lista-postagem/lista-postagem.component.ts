import { PostagemService } from './../../services/postagem.service';
import { Component, OnInit, Output } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';

@Component({
  selector: 'app-lista-postagem',
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css']
})
export class ListaPostagemComponent implements OnInit {
  @Output() postagens:Postagem[] =
  [{id:1,
    tittle:"Erva sidreira",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem .",
    dateofcreation:"30/04/2018",
    img:"imagem",
    ref:"444",
    editquant:"55",
    editdate:"555"},
    {id:2,
      tittle:"Rosa",
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem .",
      dateofcreation:"30/04/2018",
      img:"imagem",
      ref:"444",
      editquant:"55",
      editdate:"555"}
  ];
  constructor(private postagemService:PostagemService) {
  }

  ngOnInit(): void {
  }
  getPostagens(){
    this.postagemService.getPostagens().subscribe((
      postagens:Postagem[])=>{this.postagens= postagens}
    );


  }

}
