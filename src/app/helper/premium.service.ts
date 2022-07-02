import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';



@Injectable({
  providedIn: 'root'
})
export class PremiumService {
  public estaPremium: boolean = false;
  public usuarioObejo : Usuario;
  // unUsuario:Usuario;
  

  // posicion :any ;
  // nombreUsuarioLogeado;
   
  constructor(){
    this.usuarioObejo = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}")[3].premium;
    localStorage.setItem("usuarioLogeado",JSON.stringify(this.usuarioObejo));
    this.estaPremium= false;
    //((this.usuarioObejo?.premium )??"")  != "";
    
    
    //public servicio:PremiumService, public loginservice:LoginService
    // this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    // this.unUsuario = new Usuario();
    // this.nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();  
  }

  
}
