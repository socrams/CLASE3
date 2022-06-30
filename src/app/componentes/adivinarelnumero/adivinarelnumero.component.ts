import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Adivinaelnumero } from 'src/app/entidades/adivinaelnumero';
import { Usuario } from 'src/app/entidades/usuario';
import { LoginService } from 'src/app/helper/login.service';

@Component({
  selector: 'app-adivinarelnumero',
  templateUrl: './adivinarelnumero.component.html',
  styleUrls: ['./adivinarelnumero.component.css']
})
export class AdivinarelnumeroComponent  {

    adivina:Adivinaelnumero;
    intentoDelUsuario:number = 0;
    public resultado: String = "";
    public sarasa: any = "Revelar Numero" ;
    unUsuario:Usuario;
    puntaje1:number = 0;
    ///
    public ver:any = "";

    constructor(public route:Router, public loginservice:LoginService){
      this.adivina = new Adivinaelnumero();
      this.unUsuario = new Usuario();
      //this.miUsuario = new Usuario();
      // this.usuarioGuardado = JSON.parse(localStorage.getItem("Usuarios")??"[]");
      // //public mensajeLogin : String = "";
    }

    // cargarPuntaje(){
    //   let usuario:Usuario|undefined =
    //   this.usuarioGuardado.find((us)=>this.unUsuario.usuario==us.usuario
    //   && us.pass == this.unUsuario.pass);
    // }

  comparar(){
    if (this.intentoDelUsuario == this. adivina.valor)
    {
      this.adivina.msj = "Acertaste, pulsa Start para jugar denuevo."
      this.adivina.intentos=-1;
      this.puntaje1++;
      //
      // this.ver = JSON.parse(localStorage.getItem("Usuarios")??"[]").filter((t:any) => t.usuario==nombreUsuarioLogeado)[0].puntaje1+5;
      // localStorage.setItem("Puntaje",JSON.stringify(this.ver));
      //JSON.parse(localStorage.getItem("Usuarios")??"[]").filter((t:any) => t.usuario==nombreUsuarioLogeado)[0].puntaje1+5; //tra puntaje suma 5.
      //JSON.parse(localStorage.getItem("Usuarios")).filter(t=>t.usuario=="sss") // trae un user = al filtro.
      let nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();
      //console.log(nombreUsuarioLogeado);
      this.ver= JSON.parse(localStorage.getItem("Usuarios")??"[]").filter((t:any)=>t.usuario==nombreUsuarioLogeado);
      this.ver[0].puntaje1 = this.ver[0].puntaje1 + 5;
      localStorage.setItem("Usuarios",JSON.stringify(this.ver[0]));// guarda el nuevo puntaje.
      
      //

      console.log(this.ver);
      // this.usuarioLogeado = JSON.parse(local Storage.getItem("Usuarios")??"{}");
      // this.estaLogeado = ((this.usuarioLogeado?.nombre)??"")  != "";
      //  this.puntaje1 = this.loginservice.getPuntaje1();
      //  this.puntaje1 = this.puntaje1+5;
      //  this.loginservice.setPuntaje1(this.puntaje1);
    }else
    {
      this.adivina.msj = "Fallaste, intentelo denuevo."
    }
   this.adivina.intentos++;
  }

  getResultado(){
    // !this.adivina.result;
    this.sarasa = this.adivina.valor;
    return this.sarasa;
  }

}
