import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PremiumService } from '../helper/premium.service';

@Injectable({
  providedIn: 'root'
})
export class PremiumGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if ( this.serv.getPremState() != true ) {
            this.router.navigateByUrl("listajuegos");
            
     } 
    return true;
  }
  constructor(public serv:PremiumService, public router:Router) {
  }

}
  