import { Component, OnInit} from '@angular/core';
import { Ahorcado } from '../class/ahorcado';
import { AhorcadoService } from '../service/ahorcado.service';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit  {
  public espacios: Array <string>;
  public letra: string = '';
  public mensaje:string = '';
  public x: number= 0;
  public miAhorcado: Ahorcado;
  public palabra: any;


  constructor(public palabrasService:AhorcadoService) {
    this.miAhorcado = new Ahorcado();
    this.palabra = this.palabrasService.getListaPalabras()
    .subscribe(resp => {
      console.log(resp[this.x= Math.floor(Math.random()*250)].name.common);
    });

    this.miAhorcado.palabra = this.palabra;
    this.miAhorcado.palabra = this.miAhorcado.palabra.toString();
    this.espacios = this.miAhorcado.palabra.split('');


    // this.miAhorcado = new Ahorcado();
    // this.miListaPalabras=palabrasService.getListaPalabras();
    // this.miAhorcado.palabra = 'Encontrar';
    // this.espacios = this.miAhorcado.palabra.split('');

  }
toArray(palabra:string):string[]{
    return palabra.split('');
}
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

  validar() {
    if (/[a-zA-Z]$/.test(this.letra)) {
      this.miAhorcado.letrasElegidas += (', ' +  this.letra )
      this.letra='';
      this.mensaje='';
    }
    else {
      this.letra= "";
      this.mensaje = "Debe ingresar solo letras";
    }
  }
  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }

  boton () { //esto va al ctor.
    this.palabrasService.getListaPalabras()
    .subscribe(resp => {
      console.log(resp[0].name.common);
    })

  }
  ngOninit(){
  //  this.x= Math.floor(Math.random();

  }

  getRamdomValue(){
    this.x= Math.floor(Math.random()*250);
  }
}
