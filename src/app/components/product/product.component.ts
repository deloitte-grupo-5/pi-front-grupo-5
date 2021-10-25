import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() onOpenDescription:EventEmitter<null> = new EventEmitter();
  @Input() produto!:Product;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log("Add ao carrinho.")
  }

  openDetails(){
    this.onOpenDescription.emit();
  }
}
