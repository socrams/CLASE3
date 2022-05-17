import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ahorcado } from '../ahorcado';
import { AhorcadoService } from '../services/ahorcado.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})

export class AhorcadoComponent implements OnInit {

public espacios:Array<string>;
public letra:string = '';
public miAhorcado: Ahorcado;

misNombrePais:Observable <Array<Ahorcado>>| undefined;
miNombrePais: string = "";
  constructor(public serviceAhoracado:AhorcadoService) {

    this.miAhorcado = new Ahorcado();
    this.miAhorcado.palabra = 'Encontrar';
    this.espacios = this.miAhorcado.palabra.split('');


   }

  ngOnInit(): void {
  }

  validar (){
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.miAhorcado.letrasElegidas += (',' +  this.letra )
      this.letra=''; 
    }
  }
  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }
}
