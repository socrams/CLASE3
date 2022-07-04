import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PremiumComponent } from 'src/app/premium/premium.component';

const routes: Routes = [
  {path:'', component:PremiumComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PremModule { }


