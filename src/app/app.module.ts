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
import { CruzComponent } from './tictactoe/cruz/cruz.component';
import { TableroComponent } from './tictactoe/tablero/tablero.component';
import { CabezeraComponent } from './componentes/cabezera/cabezera.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PremiumComponent } from './premium/premium.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

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
    CruzComponent,
    TableroComponent,
    CabezeraComponent,
    PremiumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
