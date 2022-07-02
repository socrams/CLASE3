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
    // if (this.premiumService.getPremium()!=true) {
    //   this.router.navigateByUrl("login")
    // }
    if(!this.premiumService.getPremium()){        
      this.router.navigateByUrl("login")
    } 
    return true;
  }
  constructor(public router:Router, public premiumService:PremiumService) {

  }
  
}