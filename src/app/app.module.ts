import { DEFAULT_CURRENCY_CODE, LOCALE_ID,  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { PostagemComponent } from './components/postagem/postagem.component';
import { ListaPostagemComponent } from './components/lista-postagem/lista-postagem.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
registerLocaleData(localePt,"pt");

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ListaProdutoComponent,
    PostagemComponent,
    ListaPostagemComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:"pt"},
  {provide: DEFAULT_CURRENCY_CODE, useValue:"BRL"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
