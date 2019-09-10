import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from'@angular/forms'
import { CRMRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm/crm.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PrescriptionComponent } from './prescription/prescription.component';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [CrmComponent, PrescriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    CRMRoutingModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    InputTextareaModule,
    DialogModule
  ]
})
export class CRMModule { }
