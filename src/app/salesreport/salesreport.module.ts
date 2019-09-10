import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesreportComponent } from './salesreport/salesreport.component';
import {SalesreportRoutingModule} from './salesreport-routing.module'


@NgModule({
  declarations: [SalesreportComponent],
  imports: [
    CommonModule,
    SalesreportRoutingModule
  ]
})
export class SalesreportModule { }
