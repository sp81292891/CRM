import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CrmComponent} from './crm/crm.component'

const routes: Routes = [
  {
    path: '',
    component: CrmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
