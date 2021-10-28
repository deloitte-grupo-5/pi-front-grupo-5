
import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products:Product[] = [];
  totalPrice:any;
  constructor(private service:CartService) {}



  ngOnInit(): void {
    this.service.getProducts().subscribe((resp)=>{
      this.products= resp;
      this.totalPrice = this.service.getTotalPrice()

    })

  }



}
