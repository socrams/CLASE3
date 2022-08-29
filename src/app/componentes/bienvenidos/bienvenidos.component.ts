import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/mensaje/mensaje';
import { StorageService } from 'src/app/helper/storage.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit 
{
  public usuario:String|null = "";

  //-
  public textoMensaje: string = "";
  public coleccion: Array<Mensaje> = new Array<Mensaje>();
  //
  constructor(public firestoreApp: StorageService){  

    this.usuario = sessionStorage.getItem("Usuario");
   
    //-
    firestoreApp.traerColeccion().subscribe(t => {
      this.coleccion = [];
      (<Array<Mensaje>>t).forEach(element =>
        this.coleccion.push(element)
      )

    });
    //
   }

   Agregar() {
    let mensajeAPasar: Mensaje = new Mensaje();
    mensajeAPasar.texto = this.textoMensaje;
    mensajeAPasar.usuario = "Ezequiel";
    this.firestoreApp.setItem(mensajeAPasar);

  }
    
    
  

  ngOnInit(): void { 
    
   }

}
