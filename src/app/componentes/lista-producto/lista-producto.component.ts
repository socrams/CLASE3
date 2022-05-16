import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { Adivinaelnumero } from 'src/app/entidades/adivinaelnumero';
import { Producto } from 'src/app/producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})

export class ListaProductoComponent implements OnInit {
  nuevoProducto: Producto;
  public lista:Array<Producto>;
  public nuevo: boolean; 
  
  constructor() { 
    this.nuevo = false;
    this.lista = new Array<Producto>();
    this.lista.push({ imagen: 'https://images-na.ssl-images-amazon.com/images/I/51MSRaazr5L.png', titulo: "Adivinar el Numero", url: 'mijuego'});
    this.lista.push({ imagen: 'https://happylearning.tv/wp-content/uploads/2017/11/portada_seccion_juegos-01.png', titulo: "juego2", url: '' });
    this.lista.push({ imagen: 'https://cdn.andro4all.com/andro4all/2019/01/Brawl-Stars-imagen-destacada.jpg', titulo: "juego 3", url:'' });
    this.nuevoProducto = new Producto();
  }
  
  borrar(p:Producto){
    this.lista= this.lista.filter( t=> t.titulo != p.titulo );
  }

  nuevoProd(){
    this.nuevo = true;
    this.nuevoProducto = new Producto();
    this.lista.push (this.nuevoProducto);
  }

  ngOnInit(): void {

  }

}
