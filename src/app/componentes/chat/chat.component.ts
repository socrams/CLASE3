/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import {createClient, SupabaseClient } from '@supabase/supabase-js';
import { json } from 'express';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  comentarios: string ="";
  messages: string ="";
  ArrayComentarios: any[] = [];
  x : any;
  loqsea: any;
  
  supabase:SupabaseClient;
  
  constructor() { 
    this.supabase = createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey)
    
  }
  insertarNew(){
}
limpiar(){}




async rellenarChat(){
  let { data: menssages } = await this.supabase
  .from('menssages')
  .select('content')
  
  console.log('mensajes: ', menssages);
  this.x = menssages;
  this.loqsea.content = JSON.stringify(this.x);
  
  
}

enviarMensaje(){

}

  ngOnInit(): void {
  }

}
