
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

  openDetails() {}

  removeFromCart() {

    this.service.removeCartItem(this.produto);
  }
}
