import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/models/Postagem';
import { Product } from 'src/app/models/Product';
import { PostagemService } from 'src/app/services/postagem.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Product[] = [];

  receitas: Postagem[] = [];
  images: any[] = [];

  constructor(
    private service: ProductService,
    private postService: PostagemService,
    private router: Router
  ) {
    this.getProducts();
    this.getPostagem();
  }

  getProducts() {
    this.service.getProducts().subscribe((produtos: Product[]) => {
      this.produtos = produtos;
      this.produtos.map((a) => (a.quantidade = 1));
      console.log(produtos);
    });
  }
  getPostagem() {
    this.postService.getPostagens().subscribe((receitas: Postagem[]) => {
      this.receitas = receitas;
      console.log(this.receitas);
      this.receitas.map((a) => (this.images.push({path: a.img})))
      console.log(this.images)
    })
  }
  

  ngOnInit(): void {
    window.scrollTo({ top: 0 })

    this.getProducts()
    this.getPostagem()
  }

  handleCarouselEvents() {

    this.router.navigateByUrl("/produtos")
  }
}



