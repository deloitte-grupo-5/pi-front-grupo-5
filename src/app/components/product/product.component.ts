import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() onOpenDescription:EventEmitter<null> = new EventEmitter();
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
