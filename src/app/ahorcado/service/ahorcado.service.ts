import { Injectable } from '@angular/core';
import { ListaPalabras } from '../class/lista-palabras';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  public  url:string = 'https://restcountries.com/v3.1/all';
  public listaPalabras: Array<ListaPalabras> | undefined;

  constructor(public servicio:HttpClient) {
  }
  
   getListaPalabras():Observable<ListaPalabras[]>{
    //return this.servicio.get<Array<ListaPalabras>>(this.url)   
     return this.servicio.get<ListaPalabras[]>(this.url); 
   } 


}
