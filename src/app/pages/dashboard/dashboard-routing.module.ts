import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/app/features/accueil/accueil.component';
import { ContactComponent } from 'src/app/features/contact/contact.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'',
    component:AccueilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
