import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit{

  miUsuario:Usuario;

  constructor(public route:Router) {

    this.miUsuario=new Usuario;

   }


    Registro(){
      this.miUsuario.puntaje1=0;
      this.miUsuario.puntaje2=0;
      this.miUsuario.puntaje3=0;
      this.miUsuario.puntaje4=0;
      let listaSerializada:string =localStorage.getItem("Usuarios")??"[]";
      let ListaUsuario:Array<Usuario> = JSON.parse(listaSerializada);
      if(ListaUsuario.find((us)=>us.nombre==this.miUsuario.nombre)==undefined){
            ListaUsuario.push(this.miUsuario);
            localStorage.setItem("Usuarios",JSON.stringify(ListaUsuario))
            this.route.navigateByUrl("login");
          }else{
            console.log( " usuario ya registrado ");}


           /*  sessionStorage.setItem("Usuario",this.usuario);
          sessionStorage.setItem("Pass",this.pass);
           */
      }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
