import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  adm = true
  constructor(private router:Router) {
    if(window.sessionStorage.getItem("usuario")){
      let usuario = window.sessionStorage.getItem("usuario")
      let usuarioObj = JSON.parse(usuario!);
      if(usuarioObj.id == 1){
        this.usuarioAdm= true;
      }

    }else{
      this.router.navigateByUrl('/login')
    }

  }
  usuarioAdm= false
  ngOnInit(): void {
  }

}
