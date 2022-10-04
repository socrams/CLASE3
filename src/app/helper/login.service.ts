import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public estaLogeado: boolean;
  private usuarioLogeado: Usuario;
  public nombreUsuario: String = "";
  public puntaje1: number = 0;
  supabase: SupabaseClient;
  private _currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  private _todos: BehaviorSubject<any> = new BehaviorSubject([]);


  constructor() {
    this.usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado") ?? "{}");
    this.estaLogeado = ((this.usuarioLogeado?.nombre) ?? "") != "";

    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
      autoRefreshToken: true,
      persistSession: true,
    });

    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log('event ', event);
      console.log('session: ', session);



      if (event == 'SIGNED_IN') {
        this._currentUser.next(session?.user);
      } else {
        this._currentUser.next(false);
      }
    });
  }

  ingresarUsuario(credenciales: { 
                                  email: any, 
                                  password: any }) {
    return new Promise(async (resolve, reject) => {
      const { error, session } = await this.supabase.auth.signIn(credenciales)
      if (error) {
        reject(error);
      } else {
        resolve(session);
      }
    });
  }

  async registrarUsuario(credenciales: {email: any, password: any } ){
    return new Promise ( async (resolve, reject) => {
      const { error, session } = await this.supabase.auth.signUp(credenciales)
      if ( error ) { 
        reject ( error );
      }else{
        resolve ( session );
      }
      });
    }




  logearUsuario(usuario: Usuario) {
    this.usuarioLogeado = usuario;
    localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
    this.nombreUsuario = usuario.nombre;

  }

  logout() {
    this.estaLogeado = false;
    localStorage.setItem("usuarioLogeado", "{}");
    window.location.reload();
  }

  getUsuarioLogeado() {
    return this.usuarioLogeado.nombre;
  }

  getEstaLogeado() {
    return this.estaLogeado;
  }

  getPuntaje1() {
    return this.usuarioLogeado.puntaje1;
  }
  setPuntaje1(x: number) {
    this.usuarioLogeado.puntaje1 = x;
    localStorage.setItem("Puntos", JSON.stringify(this.usuarioLogeado));
  }

  //  getPremium(){
  //   return this.usuarioLogeado.premium;   
  // }

}


