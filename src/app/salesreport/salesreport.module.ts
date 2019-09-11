import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesreportComponent } from './salesreport/salesreport.component';
import {SalesreportRoutingModule} from './salesreport-routing.module'
import{FormsModule} from'@angular/forms'

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [SalesreportComponent],
  imports: [
    CommonModule,
    SalesreportRoutingModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    FormsModule
  ]
})
export class SalesreportModule { }
