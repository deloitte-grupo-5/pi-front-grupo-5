import { PostComponent } from './components/post/post.component';
import { ListaPostagemComponent } from './components/lista-postagem/lista-postagem.component';
import { NgModule ,DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//ajustando currency
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingProductComponent } from './components/shopping-product/shopping-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatIconModule} from '@angular/material/icon';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IvyCarouselModule } from './ivyсarousel_pro/carousel.module';
import { PostSelectedComponent } from './components/post-selected/post-selected.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
registerLocaleData(localePt,"pt");
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    LoginComponent,
    SignInComponent,
    PostComponent,
    ListaPostagemComponent,
    ShoppingCartComponent,
    ShoppingProductComponent,
    CreateProductComponent,
    AboutUsComponent,
    PerfilComponent,
    PostSelectedComponent,
    CreatePostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    ImageCropperModule,
    IvyCarouselModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"pt"},
    {provide: DEFAULT_CURRENCY_CODE, useValue:"BRL"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
