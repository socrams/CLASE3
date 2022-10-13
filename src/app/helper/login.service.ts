import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { locals } from "../helper/format";




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public estaLogeado: boolean;
  // private usuarioLogeado: Usuario;
  // public nombreUsuario: String = "";
  // public puntaje1: number = 0;
  supabase: SupabaseClient;
  private _currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  private _todos: BehaviorSubject<any> = new BehaviorSubject([]);
  

  constructor(public route:Router
  ) {
    // this.usuarioLogeado = 
    // this.usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado") ?? "{}");
    // this.estaLogeado = ((this.usuarioLogeado?.nombre) ?? "") != "";

    this.supabase = createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey, {
      // autoRefreshToken: true,
      // persistSession: true,
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

  ingresarUsuario(credenciales: { email: any, password: any }) {
    return new Promise(async (resolve, reject) => {
      const { error, session } = await this.supabase.auth.signIn(credenciales)
      
      if (error) {
        reject(error);
      } else {
        resolve(session);
      }
    });
  }

  async datosUsuario(credenciales:{email:any, nombre:any, apellido:any}){      
    const supabase =  createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey);
    const { error } = await supabase
    .from('profiles')
    .insert([
    { nombre: credenciales.nombre,apellido: credenciales.apellido, mail:credenciales.email},
  ])  
  // console.log('puto error:', error);
  }

  async registrarUsuario(credenciales: {email: any, password: any, nombre:any, apellido:any } ){
    return new Promise ( async (resolve, reject) => {
      const { error, session } = await this.supabase.auth.signUp(credenciales)
      if ( error ) { 
        reject ( error );
      }else{
        resolve ( session );
        this.datosUsuario(credenciales);
      }
      });
    }





  // logearUsuario(usuario: Usuario) {
  //   this.usuarioLogeado = usuario;
  //   localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
  //   this.nombreUsuario = usuario.nombre;

  // }
async passwordRecovery(mail:any){
  await this.supabase.auth.api.resetPasswordForEmail(mail);
}
async logout() {
    // this.estaLogeado = false;
    // localStorage.setItem("usuarioLogeado", "{}");
    // window.location.reload();
    await this.supabase.auth.signOut();
    this.supabase.getSubscriptions().map(sup => {
      this.supabase.removeSubscription(sup);
    });
    this.route.navigateByUrl('/');
  }


  getUsuarioLogeado() {
    // return this.usuarioLogeado.nombre;    
    
    return this.supabase.auth.user();
    }



    getEstaLogeado():boolean{
    //return this.estaLogeado;
    //return x.currentSession.access_token;
    let x:locals;
    if (JSON.parse(localStorage.getItem("supabase.auth.token")??"[]") != ""){
        return true;
      }else{
        return false;
      }
    }

  getPuntaje1() {
    // return this.usuarioLogeado.puntaje1;
  }
  setPuntaje1(x: number) {
    // this.usuarioLogeado.puntaje1 = x;
    // localStorage.setItem("Puntos", JSON.stringify(this.usuarioLogeado));
  }

  //  getPremium(){
  //   return this.usuarioLogeado.premium;   
  // }

  async updateEmail(){
    const { user, error } = await this.supabase.auth.update({email: 'new@email.com'})
  }

  async updatePassword(){
    const { user, error } = await this.supabase.auth.update({password: 'new password'})
  }


}


