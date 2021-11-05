import { Router } from '@angular/router';
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
  update = false;

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

  postagem: any;

  visualizar = false;
  constructor(private service: PostagemService,private router:Router) {
    if(window.sessionStorage.getItem("usuario")){
    let usuario = window.sessionStorage.getItem("usuario")
    let id = JSON.parse(usuario!)
    this.id = id.id




    }
  }
  mostrar = false
  id:any

  ngOnInit(): void {
    window.scrollTo({ top: 0})

    this.postagem= {}
    this.getPostagem();
    if(this.id == this.postagem.user.id|| this.id == 1){
      this.mostrar = true
    }

  }

  criarComentario() {
    let post = this.postagem.id
    if(this.id){
    this.service.criarComentario({id:this.id ,nome: '',
    usuario: '',
    senha: '',
    telefone:"",
    sobrenome:"",
    token: '',},this.title,this.body,this.postagem).subscribe(
      (resp)=>console.log("teste")
    )
    }else{
    this.service.showMensage("Faça o login para comentar")
    }
  }

  delete() {
    this.service.delete(this.postagem).subscribe(
      (resposta) => {
        this.service.showMensage('Postagem excluida com sucesso!');
        this.router.navigateByUrl("/comunidade")
      },
      (error) => {
        this.service.showMensage('Falha ao excluir produto!');
      }
    );
  }

  updatePostagem(){
    this.update = true;
  }
  updateClose(event:any){
    console.log(event)
    if(!event){

      this.getPostagem()
    }
    this.update = false;

  }

  enviarComentario() {}

  getPostagem(){
    this.service.getPostagemVisualizar().subscribe((resp)=>{this
      this.postagem = JSON.parse(JSON.stringify(resp))
    });
}

atualizarPostagem(event:any){
  console.log(event)
  this.postagem = event;

}
}
