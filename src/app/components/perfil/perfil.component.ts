import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  @Input() cep?: string;
  cepDataResult = '';
  resultadoLogradouro = '';
  resultadoBairro = '';
  resultadoLocalidade = '';
  resultadoUf = '';
  adm = true;
  constructor(private router: Router) {
    if (window.sessionStorage.getItem('usuario')) {
      let usuario = window.sessionStorage.getItem('usuario');
      let usuarioObj = JSON.parse(usuario!);
      if (usuarioObj.id == 5) {
        this.usuarioAdm = true;
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  async fetchCep() {
    console.log(this.cep);
    const path = `https://viacep.com.br/ws/${this.cep}/json/`;
    const response = await (await fetch(path)).json();

    this.resultadoLogradouro = response.logradouro;
    this.resultadoBairro = response.bairro;
    this.resultadoLocalidade = response.localidade;
    this.resultadoUf = response.uf;
  }

  usuarioAdm = false;
  ngOnInit(): void {}
}
