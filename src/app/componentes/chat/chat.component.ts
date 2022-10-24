import { Component, OnInit } from '@angular/core';
import {createClient, } from '@supabase/supabase-js';
import { LoginService } from 'src/app/helper/login.service';
import { environment } from 'src/environments/environment';

export interface CurrentSession {
  currentSession: currentSession;
}
export interface currentSession {
  user: User;
}
export interface User {
  email: string;
}

export interface Chat {
  id: number;
  created_at: string;
  user: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string ='';
  conversacion: string = '';
  chats = this.supabaseService.chat;
  public supabase : any;
  public mailLocal : string = '';
  public elemento:any;
  constructor(private supabaseService: LoginService) {
    
  }
  async ordenar(){
    this.elemento = await document.getElementById('app-mensajes')?.scrollTo();
  }
  async enviarMessage() {
    const supabase = createClient(environment.supabaseUrl,environment.supabaseKey)
    const {data, error } = await  supabase
    .from('chat')
    .insert(
      { message: this.message , user: supabase.auth.user()?.email },
      );
      this.message = '';
  }
  mensajes(){
    const email:CurrentSession = JSON.parse(localStorage.getItem('supabase.auth.token')?? "[]");
    this.mailLocal = email.currentSession.user.email;
  }
  salir(){
    this.supabaseService.logout();
  }

  ngOnInit():void{
    this.mensajes();
    this.ordenar();
  }
  altura(){
    console.log( this.elemento.getElementById("app-mensajes").scrollHeight);
  }
}

//   async rellenarChat(){
  //     let { data: menssages } = await this.supabase
  //   .from('menssages')
  //   .select('content')
  
//   console.log('mensajes: ', menssages);
//   this.x = menssages;
//   this.loqsea.content = JSON.stringify(this.x);


// }
// this.supabase = createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey)
// comentarios: string ="";
// messages: string ="";
// ArrayComentarios: any[] = [];
// x : any;
// loqsea: any;

// supabase:SupabaseClient;
// const email:CurrentSession = this.supabase.auth.user()?.token ;
//console.log('email: ',email.currentSession.user.email);