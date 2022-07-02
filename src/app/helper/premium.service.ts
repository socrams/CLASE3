import { Injectable } from '@angular/core';
import { Usuario } from "../entidades/usuario";
import { LoginService } from "../helper/login.service";
@Injectable({
  providedIn: 'root'
})
export class PremiumService {
  unUsuario:Usuario;
  todosLosUsuarios:Array<Usuario>
  posicion :any ;
  nombreUsuarioLogeado;
  
  constructor(public servicio:PremiumService, public loginservice:LoginService){
    this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    this.unUsuario = new Usuario();
    this.nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();  
  }

  getPosicion(){
    return this.posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==this.nombreUsuarioLogeado);
  }
  
  addPremium(){ //al objeto de todos los usuarios le agrega el premium 
   this.todosLosUsuarios[this.getPosicion()].premium=true;
   this.ponerEnUsuario();  
  }     

  quitPremium(){
    this.todosLosUsuarios[this.getPosicion()].premium=false;
    this.ponerEnUsuario();
  }
  ponerEnUsuario(){
    localStorage.setItem("Usuarios",JSON.stringify(this.todosLosUsuarios));
  }
  getPremium(){
    return this.todosLosUsuarios[this.getPosicion()].premium;
  }
}
