import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
  @Input() postagem!:Postagem;
  constructor() { }

  ngOnInit(): void {
  }

}
