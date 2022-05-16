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
constructor(public route:Router) { 
      this.adivina = new Adivinaelnumero();
      let juego:Adivinaelnumero;
    }

  comparar(){2
    if (this.intentoDelUsuario = this.adivina.valor) {
    
    } else {
      
    }
    this.adivina.valor

  }
    
  ngOnInit(): void {

  }

}
