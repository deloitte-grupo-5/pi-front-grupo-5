import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postagem!:Postagem;
  constructor() { }

  ngOnInit(): void {
  }

}
