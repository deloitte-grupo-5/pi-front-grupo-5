import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Product[] = [];
  images: any[] = []



  constructor(
    private service: ProductService
  ) {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe((produtos: Product[]) => {
      this.produtos = produtos;
      this.produtos.map((a) => (a.quantidade = 1));
      console.log(produtos);
    });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0})
  
    this.getProducts()
    this.produtos.map((a: any) => this.images.push(a.img));
  }
  
  handleCarouselEvents(){
    
  }
}



