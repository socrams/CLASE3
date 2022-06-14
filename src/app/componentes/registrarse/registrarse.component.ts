import { noUndefined } from '@angular/compiler/src/util';
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
          let listaSerializada:string =localStorage.getItem("Usuarios")??"[]";
          let ListaUsuario:Array<Usuario> = JSON.parse(listaSerializada);
          
          if(ListaUsuario.find((us)=> 
            us.nombre==this.miUsuario.nombre)==undefined){
              ListaUsuario.push(this.miUsuario);
              localStorage.setItem("Usuarios",JSON.stringify(ListaUsuario))
              this.route.navigateByUrl("login");
              }

          
           /*  sessionStorage.setItem("Usuario",this.usuario);
          sessionStorage.setItem("Pass",this.pass);
           */
      }

  ngOnInit(): void {
  }

}
