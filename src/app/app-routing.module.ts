import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostSelectedComponent } from './components/post-selected/post-selected.component';
import { ListaPostagemComponent } from './components/lista-postagem/lista-postagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

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
  },{
    path:"perfil", component:PerfilComponent
  },{
    path:"teste", component:ProductDetailComponent
  },{
    path:"view-post", component:PostSelectedComponent
  },{
    path:"create-post", component:CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
