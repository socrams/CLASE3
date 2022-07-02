/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { LoginService } from 'src/app/helper/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuario;
  public usuarioGuardado:Array<Usuario>;
  public mensajeLogin : String = "";
  

  constructor(public route:Router, public loginService:LoginService) {//public fb:FormBuilder
    this.miUsuario = new Usuario();
    this.usuarioGuardado = JSON.parse(localStorage.getItem("Usuarios")??"[]");
    // this.form=fb.group({
    //   'nombre':['' ,[Validators.required],[Validators.min(5)]],
    //   'password':['',[Validators.required],]
    // })
  }
  

  loguear(){

    let usuario:Usuario|undefined =
    this.usuarioGuardado.find((us)=>this.miUsuario.usuario==us.usuario
    && us.pass == this.miUsuario.pass);

    if (usuario) {
      this.loginService.estaLogeado = true;
      this.loginService.logearUsuario(usuario);
      this.route.navigateByUrl("listajuegos")
    }
    else{
      this.mensajeLogin="Datos incorrectos, intente nuevamente."
    }

   }
   
loginHardCode(){
  this.usuarioGuardado.find((us)=>this.miUsuario.usuario=us.usuario);
  this.usuarioGuardado.find((us)=>this.miUsuario.pass=us.pass);
}


  ngOnInit(): void {

  }

}
