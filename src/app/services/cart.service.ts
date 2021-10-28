import { Product } from 'src/app/models/Product';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private matSnackBar: MatSnackBar) { }

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();


  }
  getTotalPrice() : number{
    let totalAbsolute = 0;
    this.cartItemList.map((a:any)=>{
      totalAbsolute += a.valor;
    })
    return totalAbsolute;
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
