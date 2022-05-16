import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';
import { Nombrepaises } from '../nombrepaises';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  misPalabras: Observable <Array<Nombrepaises>> | undefined;

  constructor(public bs:ServicioService) {
    this.misPalabras=bs.getPalabras();
  }

  ngOnInit(): void {

  }
play(){}
iniciar(){}



}
