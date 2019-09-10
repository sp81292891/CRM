import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'crm',
    loadChildren: () => import('./crm/crm.module').then(mod => mod.CRMModule)
  },
  {
    path: 'salesreport',
    loadChildren: () => import('./salesreport/salesreport.module').then(mod => mod.SalesreportModule)
  },
  {
    path: '',
    redirectTo: 'crm',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
