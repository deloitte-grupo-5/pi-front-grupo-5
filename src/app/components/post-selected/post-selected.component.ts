import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css'],
})
export class PostSelectedComponent implements OnInit {
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  user = {
    id: 1,
    nome: '',
    usuario: '',
    senha: '',
    token: '',
  };
  title = '';
  body = '';

  // post = {
  //   id: 1,
  //   comentarios: [],
  //   curtidas: 0,
  //   data: new Date(),
  //   porcao: 0,
  //   preparo: 0,
  //   referencias: '',
  //   texto: '',
  //   titulo: '',
  //   user: this.user
  // }

  postagem!: Postagem ;
  visualizar = false;
  constructor(private service: PostagemService) {
    let usuario = window.sessionStorage.getItem("usuario")
    let id = JSON.parse(usuario!)
    this.id = id.id
  }

  id:any

  ngOnInit(): void {
    this.service.getPostagens().subscribe((postagem: Postagem[]) => {
      this.visualizar = true;
      this.postagem = postagem[0];
    });
  }

  criarComentario() {

  }

  delete() {
    this.service.delete(this.postagem).subscribe(
      (resposta) => {
        this.service.showMensage('Produto excluido com sucesso!');
        this.onDelete.emit();
      },
      (error) => {
        this.service.showMensage('Falha ao excluir produto!');
      }
    );
  }

  enviarComentario() {}
}
