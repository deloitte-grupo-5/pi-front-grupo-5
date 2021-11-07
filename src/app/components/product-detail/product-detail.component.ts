import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Output() onCloseDescription:EventEmitter<null> = new EventEmitter();
  @Input() produto!:Product;
  constructor(private cartService:CartService) { }

  disponivel = true;
  indisponivel = false;
  ngOnInit(): void {
    if (this.produto.quantidade_estoque == 0) {
      this.disponivel = false;
      this.indisponivel = true;
    }
  }

  addToCart(){
    this.cartService.addtoCart(this.produto);
  }

  closeDetails(){
    this.onCloseDescription.emit();
  }
}
