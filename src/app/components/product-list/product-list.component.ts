import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  produtos: Product[] = [];

  texto = ""

  @Input() produtoSelecionado!: Product;

  @Input() produtoEditando!:any;

  viewDetails = false;
  viewEdit =false;
  public produtosExibidos: Product[] = [];

  constructor(
    private service: ProductService,
    teste: MatPaginatorIntl,
    private router: Router
  ) {
    this.getProducts();
    teste.nextPageLabel = 'Proxima pagina';
    teste.itemsPerPageLabel = 'Itens por pagina';
    teste.previousPageLabel = 'Pagina anterior';
  }

  getProducts() {
    this.service.getProducts().subscribe((produtos: Product[]) => {
      this.produtos = produtos;
      this.produtos.map((a) => (a.quantidade = 1));
      this.atualizarProdutosExibidos();
    });
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0})

    this.service.onProdutosMudaram.subscribe(() => {
      this.getProducts();
    });
    this.service.onRouterModal.subscribe((resp)=> {
      this.AbrirDoHome(resp)
    })
  }

  AbrirDoHome(resp:Product){
      console.log(resp)
      this.viewDetails = true;
      this.produtoSelecionado = resp;
      console.log(this.viewDetails)
  }

  showDetails(produto: Product) {
    this.viewDetails = true;
    this.produtoSelecionado = produto;
    console.log(this.viewDetails)
  }

  closeDetails() {
    this.viewDetails = false;
  }

  atualizarPagina() {
    this.service.onProdutosMudaram.emit();
  }

  atualizarProdutosExibidos() {
    this.produtosExibidos = this.produtos.slice(0, 6);
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.produtos.length) {
      endIndex = this.produtos.length;
    }
    this.produtosExibidos = this.produtos.slice(startIndex, endIndex);
  }

  update(produto:Product) {

    this.produtoEditando = produto;
    this.viewEdit= true;
    this.service.onProdutosMudaram.emit()
    this.atualizarPagina();
  }
  closeUpdate(){
    this.viewEdit= false;
    this.atualizarPagina();

  }

  procurarProduto(texto:string) {
    texto = this.texto;
    this.service.procurarProduto(texto).subscribe((produtos: Product[])=> {
    console.log(produtos)
    this.produtos = produtos;
      this.produtos.map((a) => (a.quantidade = 1));
      this.atualizarProdutosExibidos();
    })
  }
  limparPesquisa(){
    this.produtos.map((a) => (a.quantidade = 1));
    this.atualizarProdutosExibidos();
    this.texto =""
  }
}
