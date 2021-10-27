import { ListaPostagemComponent } from './components/lista-postagem/lista-postagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },{
    path:"produtos", component: ProductListComponent
  },{
    path:"login", component: LoginComponent
  },{
    path:"cadastrar", component: SignInComponent
  },{
    path:"comunidade", component:ListaPostagemComponent
  },{
    path:"carrinho", component:ShoppingCartComponent
  },{
    path:"sobre", component:AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
