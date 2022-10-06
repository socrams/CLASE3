import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { LoginService } from '../helper/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // if(!this.loginService.estaLogeado){
      //   this.router.navigateByUrl("login")        
      // } 
      // if(this.loginService.getEstaLogeado()){
      //   return true;
      // }else{
      //   return false;
      // }
        return true;
    }

  constructor(public router:Router, public loginService:LoginService) {
 
  }
}