import { getHtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AboutusService } from '../helper/aboutus.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public nombre :string ='';
  public avatar : any = '';
  public url : any = '';
  public x: any = '';
  constructor(public gitService:AboutusService) {

    this.gitService.getGit().subscribe(resp => {
      this.nombre=(resp.login);
    });
    ;
    this.gitService.getGit().subscribe(resp => {
      this.avatar=(resp.avatar_url);
    });
    this.gitService.getGit().subscribe(resp => {
      this.url=(resp.html_url);
    });
   }




  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

}
