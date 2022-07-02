import { Component, OnInit } from '@angular/core';
import {RouterLink } from '@angular/router';
import { LoginService } from '../helper/login.service';
import { PremiumService } from '../helper/premium.service';
RouterLink
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
   
//



  // unUsuario:Usuario;
  // todosLosUsuarios:Array<Usuario>
  // posicion :any ;
  // nombreUsuarioLogeado;
  
//
  constructor(public servicio:PremiumService, public loginservice:LoginService){
    
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
