import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  onlogoff: EventEmitter<any> = new EventEmitter();

  onlogar: EventEmitter<any> = new EventEmitter();

  private readonly url = "https://api-jardimnapanela.herokuapp.com";

  constructor(
    private http: HttpClient,
    private matSnackBarModule: MatSnackBar
  ) {}

  login(usuario: string, senha: string) {
    return this.http.post(this.url + "/usuario/logar", {
      usuario,
      senha,
    });
  }
 
  showMensage(msg: string) {
    this.matSnackBarModule.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  cadastrarUsuario(
    nome: string,
    email: string,
    sobrenome: string,
    telefone: string,
    senha: string,
    usuario: string
  ) {
    // const url = 'http://localhost:8080/usuario/cadastrar';
    //return this.http.post(url,{nome,email,sobrenome,telefone,senha,usuario})
    return this.http.post(this.url + "/usuario/cadastrar", {
      nome,
      email,
      sobrenome,
      telefone,
      senha,
      usuario,
    });
  }
  logar(usuarioLogado: any) {

    this.onlogar.emit(usuarioLogado);
  }
  logout() {
    window.sessionStorage.removeItem("token")
    window.sessionStorage.removeItem("usuario")
    this.onlogoff.emit();
  }

}
