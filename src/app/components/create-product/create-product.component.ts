import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  nome=""
  desc=""
  quantidade_estoque!:number
  valor!:number;


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  criarProduto(){
    this.productService.criarProduto(this.nome,this.desc,this.valor,this.quantidade_estoque).subscribe(
      (dados)=> console.log(dados)
    );
  }

}
