
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produtos!:Produto[];

  constructor(private produtoService:ProdutoService) {
    this.getProdutos();
  }

  ngOnInit(): void {
  }
  getProdutos(){
    this.produtoService.getProdutos().subscribe((produtos:Produto[])=>
    {this.produtos = produtos;
    console.log(produtos)
    },
    error=>console.log("nada encontrado"));
  }

}
