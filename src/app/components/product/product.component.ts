import { CartService } from './../../services/cart.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { style } from '@angular/animations';

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
  constructor(private service:ProductService,private cartService:CartService) {
    let usuario = window.sessionStorage.getItem("usuario")
    let id = JSON.parse(usuario!)   
    this.id = id.id
   }
   
   id:any;

   user = {
    id: 1,
    nome: '',
    usuario: '',
    senha: '',
    token: '',
  };

  display = 'listview'

  mudarDisplay(){
    this.display='none';
  }

  ngOnInit(): void {
    this.user.id = this.id;
    console.log(this.id)
    console.log(this.user.id)
    if(this.id != 1) {
      // let none = document.getElementsByClassName("edit")
      this.mudarDisplay()
    }
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
  updade(){
    this.onEdit.emit(this.produto);
  }


}
