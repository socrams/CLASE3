import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  usuarios:Array <Usuario>;

  constructor() { this.usuarios=JSON.parse(localStorage.getItem("Usuarios")??'[]')

}



  ngOnInit(): void {
  }

}
