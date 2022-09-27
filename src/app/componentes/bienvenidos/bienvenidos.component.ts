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
  constructor(){  
   }  

  ngOnInit(): void { 
    
   }

}
