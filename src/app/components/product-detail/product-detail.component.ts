import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Output() onCloseDescription:EventEmitter<null> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log("Add ao carrinho.")
  }
  
  closeDetails(){
    this.onCloseDescription.emit();
  }
}
