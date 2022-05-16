import { Injectable } from '@angular/core';

import { Observable,} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Nombrepaises } from '../nombrepaises';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public  url:string = 'https://restcountries.com/v3.1/all';
  public paises: Array<Nombrepaises> | undefined;
  constructor(public servicio:HttpClient) { 
    
  }



  getPalabras():Observable<Array<Nombrepaises>>{

    return this.servicio.get<Array<Nombrepaises>>(this.url)     //.subscribe(x=>{this.paises=x})
  }

}