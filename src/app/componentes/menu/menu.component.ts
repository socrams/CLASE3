import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/helper/login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  stadoLogin: boolean = false;

  constructor(public loginService: LoginService) {
    this.stadoLogin = loginService.getEstaLogeado();
  }


  logOut(){
    this.loginService.logout();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

}
