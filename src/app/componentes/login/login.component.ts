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
export class LoginComponent implements OnInit {

  miUsuario: Usuario;
  public usuarioGuardado: Array<Usuario>;
  // public mensajeLogin: String = "";
  credenciales: FormGroup;
  public mail: string = '';

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
    // console.log('x',supabaseService.getEstaLogeado);
    
    this.miUsuario = new Usuario();
    this.usuarioGuardado = JSON.parse(localStorage.getItem("Usuarios") ?? "[]");
  }

  async loginSupa() {
    const loading = await this.loadingController.create();
    await loading.present();  
    this.supabaseService.ingresarUsuario(this.credenciales.value).then(async data => {
      await loading.dismiss();
      this.route.navigateByUrl('/listajuegos', {replaceUrl:true});
    }, async err => { 
      await loading.dismiss();
      this.showError('Carga Fallida',err.message);
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

  
  // loguear() {

  //   let usuario: Usuario | undefined =
  //     this.usuarioGuardado.find((us) => this.miUsuario.usuario == us.usuario
  //       && us.pass == this.miUsuario.pass);

  //   if (usuario) {
  //     this.loginService.estaLogeado = true;
  //     this.loginService.logearUsuario(usuario);
  //     this.route.navigateByUrl("listajuegos")
  //   }
  //   else {
  //     this.mensajeLogin = "Datos incorrectos, intente nuevamente."
  //   }

  // }
  
  mostrar(){
    console.log('pass: ',this.credenciales.value.password);
    console.log('email: ',this.credenciales.value.email);
    console.log('token: ',this.supabaseService.getEstaLogeado());
    
    
  }
  passwordRecovery(){
    return this.loginService.passwordRecovery(this.mail);
  }
  
  // logeado(){
  //   let storage = JSON.parse(localStorage.getItem("supabase.auth.token") ?? "[]");
  // }
  ngOnInit(): void {
  }
}

// loginHardCode() {
  //   this.usuarioGuardado.find((us) => this.miUsuario.usuario = us.usuario);
  //   this.usuarioGuardado.find((us) => this.miUsuario.pass = us.pass);
  // }