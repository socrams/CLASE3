import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(public route:Router,) {//public fb:FormBuilder
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
    this.route.navigateByUrl("listajuegos")
    }

   }



  ngOnInit(): void {
  
  }

}
