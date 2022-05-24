import { Component, OnInit } from '@angular/core';
import { Adivinaelnumero } from 'src/app/entidades/adivinaelnumero';
import { Router,RouterLink } from '@angular/router';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-adivinarelnumero',
  templateUrl: './adivinarelnumero.component.html',
  styleUrls: ['./adivinarelnumero.component.css']
})
export class AdivinarelnumeroComponent implements OnInit {

    adivina:Adivinaelnumero;
    intentoDelUsuario:number = 0;
    public resultado: String = "";

constructor(public route:Router) { 
      this.adivina = new Adivinaelnumero();
      let juego:Adivinaelnumero;
      
    }

  comparar(){
    if (this.intentoDelUsuario == this.adivina.valor) {
      this.resultado = "acertaste, pulsa Start para jugar denuevo."  
    } else {
      this.resultado = "intentelo denuevo"
      // console.log("mal")
    }
    // this.adivina.valor
  }
  getResultado(){
    return this.resultado;
  }  
  ngOnInit(): void {

  }

}
