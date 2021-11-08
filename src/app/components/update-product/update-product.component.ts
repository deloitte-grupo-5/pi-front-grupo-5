import { Router } from '@angular/router';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Input () produto!:Product
  @Output () onCloseUpdate:EventEmitter<null> = new EventEmitter();
  mudou =false



  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0})

    if(!window.sessionStorage.getItem('token')){
      this.router.navigateByUrl("/login")
    }else{

    }
  }
  limparCampos(){


  }



  imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    closeUpdate(){
      this.onCloseUpdate.emit();
    }
    update(){
      this.productService.update(this.produto).subscribe(
        (resp)=>{this.productService.showMensage("Produto alterado com sucesso!")
        this.mudou = true
      },
        (error)=>this.productService.showMensage("Falha ao alterar produto")
      );
    }

}
