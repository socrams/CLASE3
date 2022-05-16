import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/producto';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements 
OnInit {

  @Output()  public aceptarNuevo = new EventEmitter<Producto>();

  @Input() public prod:Producto;

  constructor() { 
    this.prod = new Producto();
  }

  Aceptar(){
    this.aceptarNuevo.emit();
  }
  
  ngOnInit(): void {
  }

}
           