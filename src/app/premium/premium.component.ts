import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { PremiumService } from '../helper/premium.service';
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  public posicion:number = 0;
  public todosLosUsuarios : Array<Usuario>;
  public nombreUsuarioLogeado : Usuario;
  
  constructor(public serv:PremiumService) {
    this.todosLosUsuarios= JSON.parse(localStorage.getItem("Usuarios")??"[]");
    this.nombreUsuarioLogeado =JSON.parse(localStorage.getItem("usuarioLogeado")??"{}");
  }
  getPosicion(){
    return this.posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==this.nombreUsuarioLogeado.nombre);
  }
  
  addPremium(){                                                                                                                                                                                   
   this.todosLosUsuarios[this.getPosicion()].premium=true;
   this.ponerEnUsuario();  
  }     

  quitPremium(){
    this.todosLosUsuarios[this.getPosicion()].premium=false;
    this.ponerEnUsuario();
  }
  ponerEnUsuario(){
    localStorage.setItem("Usuarios",JSON.stringify(this.todosLosUsuarios));
  }
  getPremium(){
    return this.todosLosUsuarios[this.getPosicion()].premium;
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
