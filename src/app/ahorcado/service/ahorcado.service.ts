import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Welcome } from "../ahorcado/models/responde";

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  public  url:string = 'https://restcountries.com/v3.1/all';

  constructor(public servicio:HttpClient) {
  }
  
  getListaPalabras(){
    return this.servicio.get<Welcome>(this.url)

  }    

  

}
