import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { ResultadosComponent } from './Componentes/resultados/resultados.component';
import { ComisionComponent } from './Componentes/comision/comision.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { BtnsComponent } from './Componentes/btns/btns.component';
import { BlogComponent } from './Componentes/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactoComponent,
    ResultadosComponent,
    BlogComponent,
    ComisionComponent,
    InicioComponent,
    BannerComponent,
    BtnsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
