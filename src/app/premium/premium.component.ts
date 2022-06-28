import { Component, OnInit } from '@angular/core';
import { PremiumService } from '../helper/premium.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  public premium: boolean = false ;

  constructor(public servicio:PremiumService ) { }

  servicios(){

  }

  ngOnInit(): void {
  }

}
