import { CartService } from './../../services/cart.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output () onDelete:EventEmitter<any> = new EventEmitter();
  @Output() onOpenDescription:EventEmitter<Product> = new EventEmitter();
  @Input() produto!:Product;
  constructor(private service:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addtoCart(this.produto);
  }


  openDetails(){
    this.onOpenDescription.emit(this.produto);
  }
  delete(){
    this.service.delete(this.produto).subscribe(
      (resposta)=>{
        this.service.showMensage("Produto excluido com sucesso!")
        this.onDelete.emit()
      },
      (error)=>{this.service.showMensage("Falha ao excluir produto!")}

    )
  }


}
