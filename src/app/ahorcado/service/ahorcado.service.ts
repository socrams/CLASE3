import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Welcome } from "../ahorcado/models/responde";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  public  url:string = 'https://restcountries.com/v3.1/all';

  constructor(public servicio:HttpClient) {
  }

  getListaPalabras(): Observable<Welcome[]>{
    return this.servicio.get<Welcome[]>(this.url);
    //return this.servicio.get<Welcom>(this.url)

  }



}
