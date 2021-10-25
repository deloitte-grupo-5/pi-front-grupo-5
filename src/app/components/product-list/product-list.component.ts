import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  produtos!:Product[];
  viewDetails = false;

  constructor(private service:ProductService) {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(
      (produtos:Product[]) =>{
        this.produtos = produtos
        console.log(produtos)
      });
  }
  ngOnInit(): void {
  }

  showDetails(){
    this.viewDetails = true;
  }

  closeDetails(){
    this.viewDetails = false;
  }
}
