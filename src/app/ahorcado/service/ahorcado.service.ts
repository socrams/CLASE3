import { Injectable } from '@angular/core';
import { ListaPalabras } from '../class/lista-palabras';
import { HttpClient } from '@angular/common/http';
//import { Observable, Subject } from 'rxjs';
import { Welcome } from "../ahorcado/models/responde";

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  public  url:string = 'https://restcountries.com/v3.1/all';
  public listaPalabras: Array<ListaPalabras> | undefined;

  constructor(public servicio:HttpClient) {
  }
  

  // getListaPalabras():Observable<Array<ListaPalabras>>{
  //   return this.servicio.get<Array<ListaPalabras>>(this.url)
  // }   
  getListaPalabras(){
    return this.servicio.get<Welcome>(this.url)
    // .subscribe( x => {
    //   x
    // })
  }    

  

}
