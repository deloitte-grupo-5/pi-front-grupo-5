
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


  ngOnInit(): void {

  }
  diminuirProduto(){
    if(this.produto.quantidade>1){
    this.produto.quantidade--;
    this.service.removeValue(this.produto);
    }

  }
  adicionarProduto(){

    if(this.produto.quantidade<this.produto.quantidade_estoque){
    this.produto.quantidade++;
    this.service.addValue(this.produto);
    }
  }

  openDetails() {}

  removeFromCart() {
    this.service.removeCartItem(this.produto);
  }
}
