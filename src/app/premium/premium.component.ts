import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { PremiumService } from '../helper/premium.service';
import { Router } from '@angular/router';
import { LoginService } from '../helper/login.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  public posicion:number = 0;
  // public todosLosUsuarios : Array<Usuario>;
  // public nombreUsuarioLogeado : Usuario;
  
  constructor(public route:Router, public serv:PremiumService, public loginService:LoginService) {
    
    // this.todosLosUsuarios= JSON.parse(localStorage.getItem("Usuarios")??"[]");
    // this.nombreUsuarioLogeado =JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
  }
  getPosicion(){
    // return this.posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==this.nombreUsuarioLogeado.nombre);
  }
  
  addPremium(){                                                                                                                                                                                   
  //  this.todosLosUsuarios[this.getPosicion()].premium=true;
    this.serv.addPremium();
    console.log(this.serv.addPremium());
    
    this.route.navigateByUrl("listajuegos");
  }     

  quitPremium(){
    // this.todosLosUsuarios[this.getPosicion()].premium=false;
    this.serv.quitPremium();
    console.log(this.serv.quitPremium());
    
    this.route.navigateByUrl("listajuegos");
  }
  
  getPremium(){
    //return this.todosLosUsuarios[this.getPosicion()].premium;
    
  }
  usuarioLogeado(){
    return this.loginService.getUsuarioLogeado();
  }

  
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
