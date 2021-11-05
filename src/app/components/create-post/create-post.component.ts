import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/models/Comentario';
import { Usuario } from 'src/app/models/Usuario';
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
    }else{

    }
  }

  id:any
  img=""
  ingredientes:string[]= ['']
  titulo = '';
  texto = '';
  comentarios = [];
  curtidas = 0;
  porcao = 0;
  preparo = 0;
  referencias = '';
  user = {
    id:1,
    nome: '',
    usuario: '',
    senha: '',
    telefone:"",
    sobrenome:"",
    token: '',
  };

  ngOnInit(): void {
    window.scrollTo({ top: 0})
  }

  criarPostagem() {
    let id:any
    let usuario:any
    if(window.sessionStorage.getItem("usuario")){
      usuario = window.sessionStorage.getItem("usuario")
      id = JSON.parse(usuario!).id
      this.id = id

    }


    this.postService
      .criarPostagem(
        this.titulo,
        this.texto,
        this.comentarios,
        this.curtidas,
        this.porcao,
        this.preparo,
        this.referencias,
        this.user,
        this.ingredientes,
        this.img
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
      track(index:number, value:string){
        return index;
      }

      addIngradiente(){
        this.ingredientes.push("")
      }
      removeIngrediente(pos:number):void{
        this.ingredientes.splice(pos,1);
      }

}
