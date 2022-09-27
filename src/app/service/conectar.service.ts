import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllJSDocTags, servicesVersion } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  public url= 'http://localhost:8080';

  constructor(public servicio:HttpClient) { }

  getData(){
    return this.servicio.post(this.url+ "/identificador/",{"nombre":"ffff","apellido":"aaaa"});
  }
}
