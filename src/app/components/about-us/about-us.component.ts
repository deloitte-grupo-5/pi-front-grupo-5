import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  receitas: Postagem[] = [];
  images: any[] = [];

  constructor(private postService: PostagemService) {
    this.getPostagem();
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0})
  }

  getPostagem() {
    this.postService.getPostagens().subscribe((receitas: Postagem[]) => {
      this.receitas = receitas;
      console.log(this.receitas);
      this.receitas.map((a) => (this.images.push({path: a.img})))
      console.log(this.images)
    })
  }
}
