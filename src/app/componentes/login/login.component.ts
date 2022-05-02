import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuario;

  public usuarioGuardado:Array<Usuario>;

  constructor(public route:Router) {
    this.miUsuario = new Usuario();
    this.usuarioGuardado = JSON.parse(localStorage.getItem("Usuarios")??"[]");
   }
  
  loguear(){
    
    let usuario:Usuario|undefined = 
    this.usuarioGuardado.find((us)=>this.miUsuario.usuario==us.usuario 
    && us.pass == this.miUsuario.pass);
    
    if (usuario) {
    this.route.navigateByUrl("estadisticas")
    }

   }
  


  ngOnInit(): void {
  
  }

}
