import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/helper/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public loginService: LoginService ) {
    let x = this.loginService.estaLogeado;
  }

  ngOnInit(): void {

  }

}
