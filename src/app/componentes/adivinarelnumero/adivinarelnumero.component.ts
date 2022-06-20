import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Adivinaelnumero } from 'src/app/entidades/adivinaelnumero';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-adivinarelnumero',
  templateUrl: './adivinarelnumero.component.html',
  styleUrls: ['./adivinarelnumero.component.css']
})
export class AdivinarelnumeroComponent  {

    adivina:Adivinaelnumero;
    intentoDelUsuario:number = 0;
    public resultado: String = "";
    public sarasa: any = "Revelar Numero" ;
    unUsuario:Usuario;

constructor(public route:Router) {
      this.adivina = new Adivinaelnumero();
      this.unUsuario = new Usuario();
    }

  comparar(){
    if (this.intentoDelUsuario == this. adivina.valor) {
      this.adivina.msj = "Acertaste, pulsa Start para jugar denuevo."
      this.adivina.intentos=0;


    } else {
      this.adivina.msj = "Fallaste, intentelo denuevo."
    }
   this.adivina.intentos++;
  }
  getResultado(){
    // !this.adivina.result;
    this.sarasa = this.adivina.valor;
    return this.sarasa;
  }

}
