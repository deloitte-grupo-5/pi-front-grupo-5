import { ProductService } from './../../services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Output() onCreateProduct:EventEmitter<any> = new EventEmitter();

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

  criarProduto(){
    this.productService.criarProduto(this.nome,this.desc,this.valor,this.quantidade_estoque).subscribe(
      dados=> {this.productService.showMensage("Produto criado com sucesso!")
        this.limparCampos()
        this.onCreateProduct.emit();
    },
      error => this.productService.showMensage("Falha ao criar produto!")
    );
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
