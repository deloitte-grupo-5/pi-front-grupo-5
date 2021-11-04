import { Router } from '@angular/router';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Output() onCreateProduct: EventEmitter<any> = new EventEmitter();


  codigo!: string
  nome!: string
  nomeCientifico!: string
  outrosNomes!: string
  descricao!: string
  img!: any
  valor!: number
  quantidade_estoque!: number
  valorFrete!: number

  constructor(private productService: ProductService,private router: Router) {
    if(window.sessionStorage.getItem("usuario")){
      let usuario = window.sessionStorage.getItem("usuario")
      let usuarioObj = JSON.parse(usuario!);
      if(usuarioObj.id == 5){
        this.usuarioAdm= true;
      }
    }
    else{
      this.router.navigateByUrl("/login")
    }
  }
  usuarioAdm = false


  ngOnInit(): void {
  }


  limparCampos() {
  }

  criarProduto() {
    let produto= {
    codigo: this.codigo,
    nome: this.nome,
    nomeCientifico: this.nomeCientifico,
    outrosNomes: this.outrosNomes,
    descricao: this.descricao,
    img: this.img,
    valor:this.valor,
    quantidade_estoque: this.quantidade_estoque,
    valorFrete: this.valorFrete
    }
    this.productService.criarProduto(produto).subscribe(
      dados => {
        this.productService.showMensage("Produto criado com sucesso!")
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
