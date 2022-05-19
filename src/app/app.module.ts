import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { FormsModule } from '@angular/forms';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { AdivinarelnumeroComponent } from './componentes/adivinarelnumero/adivinarelnumero.component';
import { ProductoComponent } from "./componentes/producto/producto.component";
import { ListaProductoComponent } from './componentes/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AhorcadoComponent } from './ahorcado/ahorcado/ahorcado.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidosComponent,
    RegistrarseComponent,
    AboutmeComponent,
    EstadisticasComponent,
    AdivinarelnumeroComponent,
    ProductoComponent,
    ProductoComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    MenuComponent,
    AhorcadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
