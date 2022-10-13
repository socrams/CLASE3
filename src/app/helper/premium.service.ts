import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';



@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  // unUsuario:Usuario;
  public estaPremium: boolean;
//   public usuarioGuardado : Usuario;
// public todosLosUsuarios : Array<Usuario>;
  // posicion :any ;
  // nombreUsuarioLogeado;
   
  constructor( ){
    this.estaPremium = this.getPremState();
    // this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    // this.usuarioGuardado = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
    // let posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==this.usuarioGuardado.nombre);
    // this.usuarioGuardado.premium = this.todosLosUsuarios[posicion].premium
    // localStorage.setItem("usuarioLogeado",JSON.stringify(this.usuarioGuardado));
  }    
    
  getPremState():boolean{     
      // let x: Usuario = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
      return  this.estaPremium;
      }
    //((this.usuarioObejo?.premium )??"")  != "";
    //public servicio:PremiumService, public loginservice:LoginService
    // this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    // this.unUsuario = new Usuario();
    // this.nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();  
    
    addPremium(){                                                                                                                                                                                   
      //  this.todosLosUsuarios[this.getPosicion()].premium=true;
      return this.estaPremium = true;
      }     
    
    quitPremium(){
        // this.todosLosUsuarios[this.getPosicion()].premium=false;
        return this.estaPremium = false;
      }

  
}
