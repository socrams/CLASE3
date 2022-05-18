import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Palabras } from '../clase/palabras';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public  url:string = 'https://restcountries.com/v3.1/all';
  public paises: Array<Palabras> | undefined

  constructor(public servicio:HttpClient) { 

  }


  getPalabras():Observable<Array<Palabras>>{

    return this.servicio.get<Array<Palabras>>(this.url)    
    //.subscribe(x=>{this.paises=x})
  }

}