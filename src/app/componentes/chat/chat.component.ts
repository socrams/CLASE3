/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import {createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  titleInput: string ="";
  messages: string ="";
  lists: any[] = [];
  x : any;
  supabase:SupabaseClient;
  
  constructor() { 
    this.supabase = createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey)
  }
  enviarPost(){

}

async rellenarChat(){
  let { data: menssages } = await this.supabase
  .from('menssages')
  .select('content')
  
  console.log('mensajes: ', menssages);
  this.x= data.menssages;
  
}

enviarMensaje(){

}

  ngOnInit(): void {
  }

}
