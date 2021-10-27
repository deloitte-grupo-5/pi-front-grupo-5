import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit,Input } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  produtos:Product[]= [/*{id:1,
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
        */];
  @Input() produtoSelecionado!:Product;
  viewDetails = false;
  primeiroCarregamento = true;

  constructor(private service:ProductService,teste:MatPaginatorIntl,private router:Router) {
    this.getProducts();
    teste.nextPageLabel="Proxima pagina"
    teste.itemsPerPageLabel="Items por pagina"
    teste.previousPageLabel="Pagina anterior"


  }

  public produtosExibidos = this.produtos.slice(0,3) ;

  getProducts(){
    this.service.getProducts().subscribe(
      (produtos:Product[]) =>{
       this.produtos = produtos;
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

  OnPageChange(event:PageEvent) {
    console.log(event)
    const startIndex = event.pageIndex + event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.produtos.length){
      endIndex = this.produtos.length;
    }
    this.produtosExibidos = this.produtos.slice(startIndex, endIndex);
  }
  atualizarPagina(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }



}
