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
  @Output() onEdit:EventEmitter<Product> = new EventEmitter();
  @Input() produto!:Product;
  usuarioAdm = false
  constructor(private service:ProductService,private cartService:CartService) {
    if(window.sessionStorage.getItem("usuario")){
      let usuario = window.sessionStorage.getItem("usuario")
      let usuarioObj = JSON.parse(usuario!);
      if(usuarioObj.id == 1){
        this.usuarioAdm= true;
      }
    }
   }


  ngOnInit(): void {
    window.scrollTo({ top: 0})
  }

  adm = true;

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

  updade(){
    this.onEdit.emit(this.produto);
  }

}
