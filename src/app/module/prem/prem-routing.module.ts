import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumComponent } from 'src/app/premium/premium.component';
//import { LoginModule } from './login.module';


const routes: Routes = [
  {path:'', component:PremiumComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)
    
  
  ],
  exports: [RouterModule]
})
export class PremRoutingModule { }
