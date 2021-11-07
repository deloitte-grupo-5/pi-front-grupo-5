import { UserService } from 'src/app/services/user.service';
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
  usuario:any
  senha = ""
  constructor(private router: Router,private service:UserService) {
    if (window.sessionStorage.getItem('usuario')) {
      let usuario = window.sessionStorage.getItem('usuario');
      let usuarioObj = JSON.parse(usuario!);
      if (usuarioObj.id == 1) {
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
  ngOnInit(): void {
    window.scrollTo({ top: 0})
    let u =  window.sessionStorage.getItem("usuario")
    let id = JSON.parse(u!).id
    this.service.getUsuario(id).subscribe((resp)=>{this.usuario = resp
      console.log(resp)
    })
  }

  salvarDadosUsuario(){
    if(this.senha = ""){


    }

  }


}
