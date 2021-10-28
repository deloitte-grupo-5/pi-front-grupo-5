import { Product } from 'src/app/models/Product';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalAbsoluto!:number;

  constructor(private matSnackBar: MatSnackBar) { }

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public subjectTotal = new Subject();
  public total = 0;

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    let produtoRepetido= false;
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.showMensage("Erro! Esse produto já foi adicionado!")
        produtoRepetido = true;
      }
    })
    if(!produtoRepetido){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.total+= product.valor;
    this.getTotalPrice();
    }
  }

  getTotalPrice():Observable<any>{
    this.subjectTotal.next(this.total)
    return this.subjectTotal.asObservable();
  }
  addValue(valor:number){
    this.total+= valor;
    return this.subjectTotal.next(this.total);
  }
  removeValue(valor:number){
    this.total-= valor;
    return this.subjectTotal.next(this.total);
  }


  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  showMensage(msg:string){
    this.matSnackBar.open(msg,'',{duration:3000,horizontalPosition:"right",verticalPosition:"top"});
  }


}
