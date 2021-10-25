import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },{
    path:"produtos", component: ProductListComponent
  },{
    path:"login", component: LoginComponent
  },{
    path:"cadastrar", component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
