import { Component, OnInit} from '@angular/core';
//import { Observable } from 'rxjs'; 
import { Ahorcado } from '../class/ahorcado';
//import { ListaPalabras } from '../class/lista-palabras';
import { AhorcadoService } from '../service/ahorcado.service';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  public espacios: Array <string>;
  public letra: string = '';
  public mensaje:string = '';
  public miAhorcado: Ahorcado;
  //miListaPalabras:Observable <Array<ListaPalabras>>;
  miPalabra:string = "";
  loqsea: Array<string> | undefined;

  constructor(public palabrasService:AhorcadoService) { 
    this.miAhorcado = new Ahorcado();
    // this.miListaPalabras=palabrasService.getListaPalabras();
    this.miAhorcado.palabra = 'Encontrar'; // cambiar encontrar por array de palabras[x]
    this.espacios = this.miAhorcado.palabra.split('');
    
  } 
  ngOnInit(): void {
    this.palabrasService.getListaPalabras()
    .subscribe(resp=> {
      console.log(resp);
    }) 

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
  
  boton () {
      //https://www.youtube.com/watch?v=J2tN5zG0k18
     
  }

}


