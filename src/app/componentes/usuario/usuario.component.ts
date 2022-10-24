import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/helper/login.service';

export interface usuario {
  nombre:string;
apellido:string;
edad: string;
email: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})



export class UsuarioComponent implements OnInit {
nombre:string;
apellido:string;
edad: string;
email: string;
  constructor(public supabaseService:LoginService) { 
    this.nombre = JSON.stringify(supabaseService.supabase.auth.user()?.email);
    this.apellido =JSON.stringify(supabaseService.supabase.auth.user()?.email);
    this.edad =JSON.stringify(supabaseService.supabase.auth.user()?.email);
    this.email = JSON.stringify(supabaseService.supabase.auth.user()?.email)

    
  }
  async leer(){
    let { data: profiles, error } = await this.supabaseService.supabase
    .from('profiles')
    .select('*')
    }


  ngOnInit(): void {
  }

}
