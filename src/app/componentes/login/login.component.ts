import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/entidades/usuario';
import { LoginService } from 'src/app/helper/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miUsuario: Usuario;
  public usuarioGuardado: Array<Usuario>;
  public mensajeLogin: String = "";
  credenciales: FormGroup;
  
  constructor(
    public route: Router,
    public loginService: LoginService,
    private supabaseService: LoginService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    
    
  ) 
  {
    this.credenciales = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.miUsuario = new Usuario();
    this.usuarioGuardado = JSON.parse(localStorage.getItem("Usuarios") ?? "[]");
    
    
  }
  async loginSupa() {
    const loading = await this.loadingController.create();
    await loading.present();
    
    this.supabaseService.ingresarUsuario(this.credenciales.value).then(async data => {
      await loading.dismiss();
      this.route.navigateByUrl('/list', {replaceUrl:true}); // donde va luego de ingresar.
    },async err => { 
      await loading.dismiss();
      this.showError('Carga Fallida',err.message); // msj sino logea bien
    });
  }

  async showError(tittle: any, msg: any) {
    const alert = await this.alertController.create({
      header: tittle,
      message: msg,
      buttons: ['OK'],
    })
    await alert.present();
  }

  loguear() {

    let usuario: Usuario | undefined =
      this.usuarioGuardado.find((us) => this.miUsuario.usuario == us.usuario
        && us.pass == this.miUsuario.pass);

    if (usuario) {
      this.loginService.estaLogeado = true;
      this.loginService.logearUsuario(usuario);
      this.route.navigateByUrl("listajuegos")
    }
    else {
      this.mensajeLogin = "Datos incorrectos, intente nuevamente."
    }

  }
  
  mostrar(){}

  loginHardCode() {
    this.usuarioGuardado.find((us) => this.miUsuario.usuario = us.usuario);
    this.usuarioGuardado.find((us) => this.miUsuario.pass = us.pass);
  }
}