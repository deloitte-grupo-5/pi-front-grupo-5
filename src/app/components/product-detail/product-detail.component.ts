import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Output() onCloseDescription:EventEmitter<null> = new EventEmitter();
  @Input() produto!:Product;
  constructor(private cartService:CartService, private postService:PostagemService) { }

  disponivel = true;
  indisponivel = false;

  cozer:string = "";
  cru:boolean = false;
  cozido:boolean = false;
  folha:boolean = false;
  raiz:boolean = false;
  fruto: boolean = false;
  flor: boolean = false;
  semente: boolean = false;

  ngOnInit(): void {
    if (this.produto.quantidade_estoque == 0) {
      this.disponivel = false;
      this.indisponivel = true;
    }
    this.getReceitas()
  }

  addToCart(){
    this.cartService.addtoCart(this.produto);
  }

  closeDetails(){
    this.onCloseDescription.emit();
  }

  receitas: any[] = [];
  pancUtilizada: any[] = [];
  pancNao: any[] = []
  getReceitas(){
    this.postService.getPostagens().subscribe((post: any[]) => {
      this.receitas = post;
      this.receitas.map((a) => a.referencias==this.produto.nome||a.referencias==this.produto.outrosNomes ? this.pancUtilizada.push(a) : this.pancNao.push(a));
      let i = 0;
      do {
        this.pancUtilizada.push(this.pancNao[i])
        i++
      } while (this.pancUtilizada.length < 4)
      console.log(this.pancUtilizada[0].title);
  })}
  receitaSelecionada!:Postagem;
  clickReceita(receita:Postagem){
    this.receitaSelecionada = receita;
    this.postService.visualizar(this.receitaSelecionada)
  }

}
