import { Component, OnInit } from '@angular/core';
import { ConectarService } from 'src/app/service/conectar.service';

@Component({
  selector: 'app-conectar',
  templateUrl: './conectar.component.html',
  styleUrls: ['./conectar.component.css']
})
export class ConectarComponent implements OnInit {
  public respuesta : any; 
  public envio : any; 
  constructor(public conectarService:ConectarService) { 
  
    // this.conectarService.getData().subscribe(t => this.respuesta=t );  //trae fuiona ok

    this.conectarService.postData().subscribe
        (x => this.envio=x); 
  }
  
   
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
