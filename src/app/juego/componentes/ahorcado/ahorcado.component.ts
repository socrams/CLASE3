import { Component, OnInit } from '@angular/core';
import { Nombrepaises } from '../nombrepaises';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  
  public espacios: Array<string>;
  constructor() {
    this.miAhorcado = new Nombrepaises();
    this.miAhorcado.palabra = 'Encontrar';
    this.espacios = this.miAhorcado.palabra.split('');
  }
  public miAhorcado: Nombrepaises;



  ngOnInit(): void {

  }

}
