import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/entidades/usuario';
import { LoginService } from 'src/app/helper/login.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  credenciales: FormGroup;
  miUsuario: Usuario;

  constructor(public route: Router,
    private loadingController: LoadingController,
    private supabaseService: LoginService,
    private alertController: AlertController,
    private fb: FormBuilder,
  ) {

    this.miUsuario = new Usuario;
    this.credenciales = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    });
  }

  async registrarUsuario() {

    const loading = await this.loadingController.create();
    await loading.present();

    this.supabaseService.registrarUsuario(this.credenciales.value).then(async session => {
      await loading.dismiss();
      this.showError('Registro Completo', 'Por favor confirme su email ahora');
      this.route.navigateByUrl('login');
    }, async err => {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Registro fallido',
        message: err.msg,
        buttons: ['OK']
      });
      await alert.present();
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













  Registro() {
    // this.miUsuario.puntaje1 = 0;
    // this.miUsuario.puntaje2 = 0;
    // this.miUsuario.puntaje3 = 0
    // this.miUsuario.puntaje4 = 0;
    let listaSerializada: string = localStorage.getItem("Usuarios") ?? "[]";
    let ListaUsuario: Array<Usuario> = JSON.parse(listaSerializada);
    if (ListaUsuario.find((us) => us.nombre == this.miUsuario.nombre) == undefined) {
      ListaUsuario.push(this.miUsuario);
      localStorage.setItem("Usuarios", JSON.stringify(ListaUsuario))
      this.route.navigateByUrl("login");
    } else {
      console.log(" usuario ya registrado ");
    }


    /*  sessionStorage.setItem("Usuario",this.usuario);
   sessionStorage.setItem("Pass",this.pass);
    */
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
