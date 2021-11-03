import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-billing',
  templateUrl: './shopping-billing.component.html',
  styleUrls: ['./shopping-billing.component.css']
})
export class ShoppingBillingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
