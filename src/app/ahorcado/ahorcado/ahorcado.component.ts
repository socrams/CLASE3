import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { Ahorcado } from '../class/ahorcado';
import { AhorcadoService } from '../service/ahorcado.service';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit  {
  public espacios: Array <string>=[];
  public letra: string = '';
  public mensaje:string = '';
  public x: number= 0;
  public miAhorcado: Ahorcado;
  public palabra: any;
  control: number=0;
  public juntar: string ='';


  constructor(public palabrasService:AhorcadoService) {
    this.miAhorcado = new Ahorcado();
    //this.miUsuario = new Usuario();
    this.palabrasService.getListaPalabras()
    .subscribe(resp => {
        this.miAhorcado.palabra=(resp[this.x = Math.floor(Math.random()*250)].translations.spa.common);
        this.espacios = this.miAhorcado.palabra.split('');
     }); 
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

  validar() {
    if (/[a-zA-Z]$/.test(this.letra) ) {
      this.miAhorcado.letrasElegidas += ( (this.letra.toUpperCase()) + ' - ');
      this.letra='';
      this.mensaje='';
      if (this.revisarCompleto()!=false) {
        this.mensaje= "ganaste";
        //miUsuario.puntaje2 += 5;
      }
    }
    else {
      this.letra= "";
      this.mensaje = "Debe ingresar solo letras";
    }
  }

  revisarCompleto():boolean{
    var salida= true;
    this.espacios.forEach(element =>
      { if (this.miAhorcado.letrasElegidas.indexOf(element)<=0)
      salida = false;
      });
    return salida;
  }


  contiene(pal:string):boolean{
    return this.miAhorcado.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }

}
