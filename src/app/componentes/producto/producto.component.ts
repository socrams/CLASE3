import { Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/producto';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Output()
  public eliminarProducto = new EventEmitter<Producto>();
  @Input()  productoEntrada:Producto ;
  constructor() { 
    this.productoEntrada=new Producto();

  }

  quitar(){
    this.eliminarProducto.emit(this.productoEntrada);
  }

  ngOnInit(): void {
  }

}
