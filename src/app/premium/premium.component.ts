import { Component, OnInit } from '@angular/core';
import {RouterLink } from '@angular/router';

import { PremiumService } from '../helper/premium.service';
RouterLink
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {


  constructor(public servicio:PremiumService ) {
    this.servicio.premium=servicio.getStatePremium();
  }

  getPremium(){
    this.servicio.premium=true;
  }
  noPremium(){
    this.servicio.premium=false;
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
