import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Palabras } from '../../clase/palabras';
import { ServicioService } from '../../servicio/servicio.service';
import { Nombrepaises } from '../nombrepaises';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

    misPalabras:Observable <Array<Palabras>> | undefined;
  
    public espacios: Array<string>;
  
  constructor(public ss:ServicioService) {
    
    

    this.miAhorcado = new Nombrepaises();
    this.misPalabras = ss.getPalabras();
    this.miAhorcado.palabra = this.misPalabras;
    this.espacios = this.miAhorcado.palabra.split('');
  }
  public miAhorcado: Nombrepaises;
  ver(){
    console.log(this.ss.paises);
  }

  ngOnInit(): void {

  }

}
