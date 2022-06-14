import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public estaLogeado : boolean = false;
  private usuarioLogeado: Usuario | undefined; 
  constructor() { 
      this.usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
      this.estaLogeado = ((this.usuarioLogeado?.nombre)??"")  != "";
  }

  logearUsuario(usuario:Usuario){
    this.usuarioLogeado=usuario;
    localStorage.setItem("usuarioLogeado",JSON.stringify(usuario));
  }

  logout(){
    this.estaLogeado = false;
    localStorage.setItem("usuarioLogeado","{}");
    window.location.reload();
    }


}
  

