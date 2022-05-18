import { Component, OnInit } from '@angular/core';
import { Nombrepaises } from '../nombrepaises';


@Component({
  selector: 'app-ahorcado',
  
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  
  public espacios: Array<string>;
  public letra: string = '';

  constructor() {
    this.miAhorcado = new Nombrepaises();
    this.miAhorcado.palabra = 'Encontrar';
    this.espacios = this.miAhorcado.palabra.split('');
  }

  public miAhorcado: Nombrepaises;

  ngOnInit(): void {

  }

  validar() {
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.miAhorcado.letrasElegidas += (',' +  this.letra )
      this.letra='';
    }
  }
    
  contiene(pal:string):boolean{
      return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
    
  }  

  

}
