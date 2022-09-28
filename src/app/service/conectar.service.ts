import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { getAllJSDocTags, servicesVersion } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  // public url= 'http://localhost:8080';
  public url= 'https://beltran-api.herokuapp.com/'

  constructor(public servicio:HttpClient) { }

  getData(){ //funciona traer, no enviar.
   //return this.servicio.get(this.url+ "/identificador/",{"nombre":"ffff","apellido":"aaaa"});

   return this.servicio.get(this.url);
  }

  postData(){ //
    return this.servicio.post(this.url + "/identificador/",{"nombre":"ffff","apellido":"aaaa"});
  }
  

}
