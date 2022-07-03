import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';



@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  // unUsuario:Usuario;
  public estaPremium: boolean = false;
  public usuarioGuardado : Usuario;
public todosLosUsuarios : Array<Usuario>;
  // posicion :any ;
  // nombreUsuarioLogeado;
   
  constructor( ){
    this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    this.usuarioGuardado = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
    let posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==this.usuarioGuardado.nombre);
    this.usuarioGuardado.premium = this.todosLosUsuarios[posicion].premium
    localStorage.setItem("usuarioLogeado",JSON.stringify(this.usuarioGuardado));
  }    
    getPremState(){
      let x: Usuario = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
      return  x.premium;
    }
    //((this.usuarioObejo?.premium )??"")  != "";
    //public servicio:PremiumService, public loginservice:LoginService
    // this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    // this.unUsuario = new Usuario();
    // this.nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();  


  
}
