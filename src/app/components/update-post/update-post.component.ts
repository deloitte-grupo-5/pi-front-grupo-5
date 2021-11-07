import { PostagemService } from './../../services/postagem.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  @Input ()postagem!:any;
  @Output() onClose:EventEmitter<any> = new EventEmitter();
  @Output() onMudar:EventEmitter<any> = new EventEmitter();
  mudou =false;
  constructor(private service:PostagemService) { }

  ngOnInit(): void {
  }
  track(index:number, value:string){
    return index;
  }
  updatePostagem(){
    this.service.update(this.postagem).subscribe(
      (resp)=>{
        this.service.showMensage("Postagem alterada com sucesso")
        this.mudou = true
        this.onMudar.emit(this.postagem)
        this.close()
      },
      (error)=>{
        this.service.showMensage("Erro ao alterar postagem")
      }

    );

  }

  close(){
    console.log("close")
    this.onClose.emit(this.mudou)
  }
  addIngradiente(){
    this.postagem.ingredientes.push("")
  }
  removeIngrediente(pos:number):void{
    this.postagem.ingredientes.splice(pos,1);
  }
}
