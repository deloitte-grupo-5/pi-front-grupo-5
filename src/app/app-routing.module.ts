import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { ListaPostagemComponent } from './components/lista-postagem/lista-postagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'comunidade', component:ListaPostagemComponent},
  {path: 'produtos', component:ListaProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
