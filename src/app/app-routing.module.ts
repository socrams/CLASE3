import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AhorcadoComponent } from './ahorcado/ahorcado/ahorcado.component';
import { AdivinarelnumeroComponent } from './componentes/adivinarelnumero/adivinarelnumero.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ListaProductoComponent } from './componentes/lista-producto/lista-producto.component';
import { LoginGuardGuard } from './componentes/login-guard.guard';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { PremiumGuard } from './guard/premium.guard';
import { PremiumComponent } from './premium/premium.component';
import { TableroComponent } from './tictactoe/tablero/tablero.component';
import { ConectarComponent } from './componentes/conectar/conectar.component';
import { LoginComponent } from './componentes/login/login.component';
import { pathToFileURL } from 'url';
import { ChatComponent } from './componentes/chat/chat.component';


// import { pathToFileURL } from 'url';
// import { LoginModule } from './login/login.module';
// import { ProductoComponent } from './componentes/producto/producto.component';
// import { Component } from '@angular/core';

const routes: Routes = [

  {path:'pos', component:BienvenidosComponent},
  {path:'conectar', component:ConectarComponent},
  {path:'premium', component:PremiumComponent , canActivate:[LoginGuardGuard]},  
  {path: 'aboutme', component:AboutmeComponent},
  {path: 'chat', component:ChatComponent},
  {path: 'listajuegos', component:ListaProductoComponent, canActivate:[LoginGuardGuard]},
  {path: 'ahorcado', component:AhorcadoComponent, canActivate:[LoginGuardGuard]},
  //{path:'login', loadChildren:()=> import ('./login/login.module').then (t=> t.LoginModule)},
  {path: 'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'estadisticas', component:EstadisticasComponent},
  {path: 'mijuego', component:AdivinarelnumeroComponent, canActivate:[LoginGuardGuard]},
  {path: 'tictactoe', component:TableroComponent, canActivate:[PremiumGuard]},
  {path:'menu', component:MenuComponent},
  {path:'**', component:BienvenidosComponent},
  



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
