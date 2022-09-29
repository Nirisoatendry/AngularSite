import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './pages/loading/loading.component';


const routes: Routes = [
{
  path : '',
  redirectTo : 'loading',
  pathMatch : 'full',
},
{
  path : 'loading',
  component : LoadingComponent
},
{
  path:'dashboard',
  loadChildren : () => import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule),
  component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
