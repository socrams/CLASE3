import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  //puntos:  Observable<any[]>; //

  cuadrados = Array(9).fill(null);
  ganador = "";
  xIsNext = true;

  constructor() {//firestore: AngularFirestore
    //this.puntos = firestore.collection('puntos').valueChanges();
    }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.cuadrados = Array(9).fill(null);
    this.ganador = "";
    this.xIsNext = true;
  }

  get Jugador(){
    return this.xIsNext ? 'X' : 'O';
  }

  hacerMovimiento(idx: number) {
    if (!this.cuadrados[idx]) {
      this.cuadrados.splice(idx, 1, this.Jugador);
      this.xIsNext = !this.xIsNext;
    }
    this.ganador = this.calcularGanador();
    // if (this.ganador) {
    //   this.miUsuario.puntaje3++; agregar service

    // }
  }

  calcularGanador() {
    const lineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lineas.length; i++) 
    {
      const [a, b, c] = lineas[i];
      if (
        this.cuadrados[a] &&
        this.cuadrados[a] === this.cuadrados[b] &&
        this.cuadrados[a] === this.cuadrados[c]
      ) {
       return this.cuadrados[a];

      }
    }
    return null;
  }
}
