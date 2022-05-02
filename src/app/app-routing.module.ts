import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { AdivinarelnumeroComponent } from './componentes/adivinarelnumero/adivinarelnumero.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { Adivinaelnumero } from './entidades/adivinaelnumero';
import { Producto } from './producto';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'estadisticas', component:EstadisticasComponent},
  {path: 'mijuego', component:AdivinarelnumeroComponent},
  {path: 'producto', component:Producto},
  {path:'**', component:BienvenidosComponent},
 



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
