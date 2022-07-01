import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {
  public premium : boolean;

  constructor() {
    this.premium = false; // traerlo del json con un parse de mierda igual q el login
   }


getStatePremium(){
  return this.premium;
}

}
