import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aboutme } from '../aboutme/interfase';


@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  public  url:string = 'https://api.github.com/users/socrams';
  
  constructor(public servicio:HttpClient) { }


  getGit(): Observable<Aboutme>{
    return this.servicio.get<Aboutme>(this.url);
  }
}


