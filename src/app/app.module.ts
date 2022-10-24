import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PremiumComponent } from './premium/premium.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ConectarComponent } from './componentes/conectar/conectar.component';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './componentes/test/test.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';


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
    PremiumComponent,
    ConectarComponent,
    TestComponent,
    ChatComponent,
    UsuarioComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
