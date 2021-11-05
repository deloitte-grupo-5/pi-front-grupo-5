import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-shopping-billing',
  templateUrl: './shopping-billing.component.html',
  styleUrls: ['./shopping-billing.component.css']
})
export class ShoppingBillingComponent implements OnInit {
  valorTotal= 0;
  frete=0
  valorProdutos = 0


  constructor(private service:CartService,private router:Router, private http:HttpClient, private cepService: CepService) {
    if(!window.sessionStorage.getItem("token")){
      this.service.showMensage("Faça login para continuar")
      this.router.navigateByUrl("/login")
    }
   }

  ngOnInit(): void {
    this.valorTotal = this.service.getTotalPrice();
    this.frete = this.service.calcularFrete();
    this.valorProdutos = this.service.calcularProdutos();
  }   

  finalizar(){
    let tudoCerto = true;
    if (tudoCerto) {
      alert("Compra aprovada!");
      console.log("router para produtos")
    } else {
      alert("Ops, houve algum problema! Por favor, verifique todos os campos.")
    }
  }

  consultaCep(valor:any, form:any) {
    this.cepService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados:any, form:any) {
    form.setValue({
      cep:dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }
}
