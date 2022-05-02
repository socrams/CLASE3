import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit 
{
  public usuario:String|null = "";
  constructor(){  

    this.usuario = sessionStorage.getItem("Usuario");
   
    
   }

    
    
  

  ngOnInit(): void {  }

}
