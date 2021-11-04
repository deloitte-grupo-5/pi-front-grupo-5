import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @Output() onCreatePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostagemService, private router: Router) {
    if(!window.sessionStorage.getItem("token")){
      this.postService.showMensage("Faça login para continuar !")
      this.router.navigateByUrl("/login")
    }
  }

  id:any

  titulo = '';
  texto = '';
  comentarios = [];
  curtidas = 0;
  porcao = 0;
  preparo = 0;
  referencias = '';
  user = {
    id: 1,
    nome: '',
    usuario: '',
    senha: '',
    token: '',
  };

  ngOnInit(): void {}

  criarPostagem() {
    this.user.id = this.id;
    this.postService
      .criarPostagem(
        this.titulo,
        this.texto,
        this.comentarios,
        this.curtidas,
        this.porcao,
        this.preparo,
        this.referencias,
        this.user
      )
      .subscribe(
        (dados) => {
          this.postService.showMensage('Post criado com sucesso');
          this.router.navigateByUrl('/comunidade');
          console.log(dados);
        },
        (error) => this.postService.showMensage('Falha ao criar post!')
      );
  }
}
