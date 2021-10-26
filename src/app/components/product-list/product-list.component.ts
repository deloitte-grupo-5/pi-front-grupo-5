import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  produtos:Product[]= [{id:1,
    nome:"Erva",
    desc:"lotem ipsu faf asf a  sadf",
    img:"ttt",
    valor:1,
    thumb:"aaaa",
    quantide_estoque:1},
    {id:2,
      nome:"Erva1",
      desc:"lotem ipsu faf asf a  sadf",
      img:"ttt",
      valor:3,
      thumb:"aaaa",
      quantide_estoque:1},
      {id:3,
        nome:"Erva2",
        desc:"lotem ipsu faf asf a  sadf",
        img:"ttt",
        valor:12,
        thumb:"aaaa",
        quantide_estoque:1},
        {id:4,
          nome:"Erva3",
          desc:"lotem ipsu faf asf a  sadf",
          img:"ttt",
          valor:15,
          thumb:"aaaa",
          quantide_estoque:1}
  ];
  @Input() produtoSelecionado!:Product;
  viewDetails = false;

  constructor(private service:ProductService) {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(
      (produtos:Product[]) =>{
        this.produtos = produtos
        console.log(produtos)
      });
  }
  ngOnInit(): void {
  }

  showDetails(produto:Product){
    this.viewDetails = true;
    this.produtoSelecionado = produto;
  }

  closeDetails(){
    this.viewDetails = false;
  }
}
