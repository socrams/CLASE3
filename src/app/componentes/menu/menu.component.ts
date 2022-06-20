import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/helper/login.service';
<<<<<<< Updated upstream
import { RouterModule } from '@angular/router';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  stadoLogin: boolean = false;

<<<<<<< Updated upstream
  constructor(public loginService: LoginService) {
=======
  constructor(public routerLink:RouterLink,public router:Router,public loginService: LoginService ) {
>>>>>>> Stashed changes
    this.stadoLogin = loginService.getEstaLogeado();
  }


  logOut(){
    this.loginService.logout();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

}
