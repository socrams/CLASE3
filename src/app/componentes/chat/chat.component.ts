import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {createClient, SupabaseClient } from '@supabase/supabase-js';
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
  constructor(private supabaseService: LoginService) {
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
    // const email:CurrentSession = this.supabase.auth.user()?.token ;
    //console.log('email: ',email.currentSession.user.email);
    this.mailLocal = email.currentSession.user.email;
  }
  salir(){
    this.supabaseService.logout();
  }
  leer(){
    this.chats.forEach(chat => {
      console.log(chat);
      
    });
  }
  ngOnInit():void{
    this.mensajes();
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