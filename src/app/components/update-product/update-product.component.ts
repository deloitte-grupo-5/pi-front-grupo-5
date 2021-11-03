import { ProductService } from './../../services/product.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  nome=""
  desc=""
  quantidade_estoque!:number
  valor!:number;


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  limparCampos(){
    this.nome='';
    this.desc='';

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
}
