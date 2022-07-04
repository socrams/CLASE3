import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public estaLogeado : boolean;
  private usuarioLogeado: Usuario ;//| undefined
  public nombreUsuario: String = "" ;
  //public puntaje1: number = 0;

  constructor() {
      this.usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
      this.estaLogeado = ((this.usuarioLogeado?.nombre)??"")  != "";
  }

  logearUsuario(usuario:Usuario){
    this.usuarioLogeado=usuario;
    localStorage.setItem("usuarioLogeado",JSON.stringify(usuario));
    this.nombreUsuario=usuario.nombre;
  }

  logout(){
    this.estaLogeado = false;
    localStorage.setItem("usuarioLogeado","{}");
    window.location.reload();
  }

  getUsuarioLogeado(){
    return this.usuarioLogeado.nombre;
  }

  getEstaLogeado(){
    return this.estaLogeado;
  }

   getPuntaje1(){
     return this.usuarioLogeado.puntaje1;
   }
   setPuntaje1(x:number){
     this.usuarioLogeado.puntaje1=x;
     localStorage.setItem("Puntos",JSON.stringify(this.usuarioLogeado));
   }

  //  getPremium(){
  //   return this.usuarioLogeado.premium;   
  // }

}


