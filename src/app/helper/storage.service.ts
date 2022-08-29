import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import { Mensaje } from '../mensaje/mensaje';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem(miMensajeNuevo: Mensaje) {
    var mensajes = this.firestore.collection('Mensaje');
    mensajes.add(JSON.parse(JSON.stringify(miMensajeNuevo)))
  }
  constructor(public firestore: AngularFirestore) {
  }

  traerColeccion(): Observable<any> {
    var Mensajes = this.firestore.collection('Mensaje');
    return Mensajes.valueChanges();
  }
}
