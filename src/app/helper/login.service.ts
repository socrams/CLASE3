import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public estaLogeado : boolean = false;
  private usuarioLogeado: Usuario | undefined;
  public nombreUsuario: String = "" ;




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
    return this.usuarioLogeado?.nombre;
  }

}


