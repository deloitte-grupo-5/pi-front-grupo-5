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
  //   {
  //     comentarios: [
  //       {
  //         body: "string",
  //         data: "2021-11-04T17:02:23.617Z",
  //         id: 0,
  //         stars: 0,
  //         title: "string",
  //         user: {
  //           email: "string",
  //           endereco: [
  //             {
  //               bairro: "string",
  //               cep: "string",
  //               cidade: "string",
  //               complemento: "string",
  //               endereco: "string",
  //               estado: "string",
  //               id: 0,
  //               numero: "string"
  //             }
  //           ],
  //           id: 0,
  //           nome: "string",
  //           senha: "string",
  //           sobrenome: "string",
  //           telefone: "string",
  //           usuario: "string"
  //         }
  //       }
  //     ],
  //     curtidas: 0,
  //     data: "2021-11-04T17:02:23.617Z",
  //     id: 0,
  //     porcao: 0,
  //     preparo: 0,
  //     referencias: "string",
  //     texto: "string",
  //     titulo: "string",
  //     user: {
  //       email: "string",
  //       endereco: [
  //         {
  //           bairro: "string",
  //           cep: "string",
  //           cidade: "string",
  //           complemento: "string",
  //           endereco: "string",
  //           estado: "string",
  //           id: 0,
  //           numero: "string"
  //         }
  //       ],
  //       id: 0,
  //       nome: "string",
  //       senha: "string",
  //       sobrenome: "string",
  //       telefone: "string",
  //       usuario: "string"
  //     }
    // }




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

