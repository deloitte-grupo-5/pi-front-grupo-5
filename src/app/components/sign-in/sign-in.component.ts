import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  nome:string=""
  email:string=""
  sobrenome:string =""
  telefone:string=""
  senha:string=""
  usuario:string=""

  constructor(private service:ProductService,private router:Router) {
  }

  ngOnInit(): void {
  }
  cadastrarUsuario(){
    this.service.cadastrarUsuario(this.nome,this.email,
      this.sobrenome,this.telefone,this.senha,this.usuario).subscribe((token)=>{

      });
  }
}
