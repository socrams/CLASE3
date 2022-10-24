import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { locals } from "../helper/format";
import { ChatComponent } from '../componentes/chat/chat.component';

export interface Chat {
  id: number;
  created_at: string;
  user: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  supabase: SupabaseClient;
  private _currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  private _chat: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(public route:Router) {
    this.supabase = createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey, {
      });      
      this.supabase.auth.onAuthStateChange((event, session) => {
        console.log('event ', event);
        console.log('session: ', session);
        if (event == 'SIGNED_IN') {
          this._currentUser.next(session?.user);
          this.loadChats();
          this.cambiosChat();
        } else {
          this._currentUser.next(false);
        }
      });
    }
    
    async loadChats(){
      const query = await this.supabase.from('chat').select('*');
      this._chat.next(query.data);
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
    

    get chat(): Observable <Chat[] > {
      return this._chat.asObservable();
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
    
    async passwordRecovery(mail:any){
      await this.supabase.auth.api.resetPasswordForEmail(mail);
    }
    
    async logout() {
      await this.supabase.auth.signOut();
      this.supabase.getSubscriptions().map(sup => {
        this.supabase.removeSubscription(sup);
      });
      this.route.navigateByUrl('/');
    }
    
    getUsuarioLogeado() {
      return this.supabase.auth.user()?.email;
    }
  
    getEstaLogeado():boolean{
      let x:locals;
      if (JSON.parse(localStorage.getItem("supabase.auth.token")??"[]") != ""){
        return true;
      }else{
        return false;
      }
    }
    
    getPuntaje1() {
    }
    setPuntaje1(x: number) {
    }
    
    async updateEmail(){
      const { user, error } = await this.supabase.auth.update({email: 'new@email.com'})
    }
    
    async updatePassword(){
      const { user, error } = await this.supabase.auth.update({password: 'new password'})
    }

    cambiosChat() { //quitar evento update y delete.
      this.supabase.from('chat').on('*', payload => {
        console.log('cambios: ', payload);
        if (payload.eventType == 'INSERT') {
          const newItem: Chat = payload.new;
          this._chat.next([...this._chat.value, newItem]);
        } else if (payload.eventType == 'UPDATE') {
          const updatedItem: Chat = payload.new;
          const newValue = this._chat.value.map( (item: Chat) => {
            if (updatedItem.id == item.id) {
              item = updatedItem;
            }
            return item;
          })
          this._chat.next(newValue);
        }
      }).subscribe();
      // ()=>{this.elemento.scrollTop=this.elemento.scrollHeight }
    }
  }
  
  
  
  // logearUsuario(usuario: Usuario) {
    //   this.usuarioLogeado = usuario;
    //   localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
    //   this.nombreUsuario = usuario.nombre;
    
    
    //  getPremium(){
      //   return this.usuarioLogeado.premium;   
      // }
      // }
      // this.usuarioLogeado.puntaje1 = x;
      // localStorage.setItem("Puntos", JSON.stringify(this.usuarioLogeado));
      // return this.usuarioLogeado.puntaje1;
      //return x.currentSession.access_token;
      //return this.estaLogeado;
      // this.estaLogeado = false;
      // localStorage.setItem("usuarioLogeado", "{}");
      // window.location.reload();
      
      // public estaLogeado: boolean;
      // private usuarioLogeado: Usuario;
      // public nombreUsuario: String = "";
      // this.usuarioLogeado = 
      // this.usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado") ?? "{}");
      // this.estaLogeado = ((this.usuarioLogeado?.nombre) ?? "") != "";
      // public puntaje1: number = 0;
      // persistSession: true,
      // autoRefreshToken: true,