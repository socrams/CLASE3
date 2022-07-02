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

  
}
