import { Product } from 'src/app/models/Product';
import { Injectable, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private matSnackBar: MatSnackBar) {
    let dados = window.sessionStorage.getItem("cart")
    if(dados){
      this.cartItemList = JSON.parse(dados)
      this.productList.next(this.cartItemList)
    }

  }

  public OnPrecoMudou: EventEmitter<number> = new EventEmitter();
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public total = 0;
  public frete = 0;

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    let produtoRepetido = false;
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        if (a.quantidade < a.quantidade_estoque) {
          a.quantidade++;
          console.log(a);
          this.showMensage(`Agora você tem ${a.quantidade} unidades de ${a.nome} no carrinho`)
          window.sessionStorage.setItem("cart",JSON.stringify(this.cartItemList))
        } else {
          this.showMensage('Não é possivel adicionar mais desse produto no carrinho!');
        }
        produtoRepetido = true;
      }

    });
    if (!produtoRepetido) {
      this.cartItemList.push(product);
      this.showMensage(`${product.nome} adicionado ao carrinho `)
      this.productList.next(this.cartItemList);
      this.total += product.valor;

      this.getTotalPrice();
      console.log(product);
      window.sessionStorage.setItem("cart",JSON.stringify(this.cartItemList))
    }

  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      let valor = a.valor * a.quantidade;
      grandTotal += valor;
    });
    return grandTotal + this.calcularFrete();
  }
  addValue(produto: Product) {
    this.cartItemList.map((a: any) => {
      if (produto.id === a.id) {
        a = produto;
        console.log(produto);
        console.log(a);
      }
    });
    this.OnPrecoMudou.emit(this.getTotalPrice());
    window.sessionStorage.setItem("cart",JSON.stringify(this.cartItemList))

  }
  removeValue(produto: Product) {
    this.cartItemList.map((a: any) => {
      if (produto.id === a.id) {
        a = produto;
      }
    });
    this.OnPrecoMudou.emit(this.getTotalPrice());


  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.calcularFrete();
    this.productList.next(this.cartItemList);
    this.OnPrecoMudou.emit(this.getTotalPrice());

    window.sessionStorage.setItem("cart",JSON.stringify(this.cartItemList))

  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  showMensage(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  calcularFrete(){
    let freteTotal = 0;
    this.cartItemList.map((a: any) => {
      let freteProduto = a.valorFrete;
      if(a.quantidade>1){

        freteProduto += a.quantidade *1.5 - 1.5;
      }
      freteTotal += freteProduto;
    });
    this.frete = freteTotal;
    return freteTotal;

  }
  calcularProdutos(){
    let total = 0;
    this.cartItemList.map((a:any)=>{
      total=+ a.valor
      if(a.quantidade > 1 ){
        total = a.quantidade * a.valor ;
      }
    })
    return total
  }

  finalizarCompra() {}
}

