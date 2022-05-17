import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ahorcado } from '../ahorcado';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {
  public  url:string = 'https://restcountries.com/v3.1/all';
  public  nombrePaises: Array<Ahorcado> | undefined;


  constructor(public servicio:HttpClient) { }

  getNombrePaises():Observable<Array<Ahorcado>>{
    return this.servicio.get<Array<Ahorcado>>(this.url);
  }

}
