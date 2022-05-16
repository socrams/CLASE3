import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinarelnumeroComponent } from './componentes/adivinarelnumero/adivinarelnumero.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ListaProductoComponent } from './componentes/lista-producto/lista-producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { Adivinaelnumero } from './entidades/adivinaelnumero';
import { AhorcadoComponent } from './juego/componentes/ahorcado/ahorcado.component';
import { LoginModule } from './login/login.module';
import { Producto } from './producto';

const routes: Routes = [

  {path:'', component:MenuComponent},
  {path: 'listajuegos', component:ListaProductoComponent},
  {path:'login', loadChildren:()=> import ('./login/login.module').then (t=> t.LoginModule)},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'estadisticas', component:EstadisticasComponent},
  {path: 'mijuego', component:AdivinarelnumeroComponent},
  {path: 'producto', component:Producto},
  {path: 'ahorcado',component:AhorcadoComponent},
  {path:'**', component:BienvenidosComponent},
  


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
