
import { Product } from 'src/app/models/Product';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-product',
  templateUrl: './shopping-product.component.html',
  styleUrls: ['./shopping-product.component.css']
})
export class ShoppingProductComponent implements OnInit {
  @Input() produto!:Product;
  constructor(private service:CartService) { }
  quantidate_produto:number = 1;

  ngOnInit(): void {

  }
  diminuirProduto(){
    if(this.quantidate_produto>1){
    this.quantidate_produto--;
    }
  }
  adicionarProduto(){
    console.log(this.produto.quantidade_estoque)
    console.log(this.produto.quantidade_estoque)
    if(this.quantidate_produto<this.produto.quantidade_estoque){

    this.quantidate_produto++;
    }
  }

  openDetails() {}

  removeFromCart() {
    this.service.removeCartItem(this.produto);
  }
}
