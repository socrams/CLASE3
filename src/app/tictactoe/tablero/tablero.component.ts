import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { LoginService } from 'src/app/helper/login.service';
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
  //
  public todosLosUsuarios:Array<Usuario>;
  public posicion :any ;
  //

  constructor(public loginservice:LoginService) {//firestore: AngularFirestore
    //this.puntos = firestore.collection('puntos').valueChanges();
    this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");
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
    if (this.ganador== "X"){
      
      //
      let nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();
      this.posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==nombreUsuarioLogeado);
      //console.log(this.posicion);
      this.todosLosUsuarios[this.posicion].puntaje3=this.todosLosUsuarios[this.posicion].puntaje3+5;
      //console.log(this.todosLosUsuarios);
      localStorage.setItem("Usuarios",JSON.stringify(this.todosLosUsuarios));
      
      //
    

      alert(this.ganador + " gana");
      this.newGame();

    }
    if (this.ganador =="O"){
      
      //
      let nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();
      this.posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==nombreUsuarioLogeado);
      //console.log(this.posicion);
      this.todosLosUsuarios[this.posicion].puntaje4=this.todosLosUsuarios[this.posicion].puntaje4+5;
      //console.log(this.todosLosUsuarios);
      localStorage.setItem("Usuarios",JSON.stringify(this.todosLosUsuarios));
      
      //
    

      alert(this.ganador + " gana");
      this.newGame();

    }
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
