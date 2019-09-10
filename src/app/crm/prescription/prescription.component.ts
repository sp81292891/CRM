import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {PatientDetails} from '../crm.model'
import {CrmService} from '../crm.service'
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
 @Input()displayPrescription:boolean;
 @Output("HidePrescription") hidePrescription=new EventEmitter<boolean>();
 patientId:SelectItem[];
 frmdate:Date=new Date();
 todate:Date=new Date();
 pDetails:PatientDetails[];
 selectedPrintOpt:boolean;
  constructor(private svc:CrmService){
    this.patientId = [
      {label: '1235', value: '123'},
      {label: '12356', value: '1235'},
      {label: '5321', value: '6795'},
      {label: '2345', value: '5673'}
  ];
   }

  ngOnInit() {
this.svc.getPatientDetails().pipe().subscribe((val:PatientDetails[])=>{
  this.pDetails=val;
})
  }
  Submit(){
    this.displayPrescription=false;
    this.hidePrescription.emit(false);
  }
  Cancel(){
    this.displayPrescription=false;
    this.hidePrescription.emit(false);
  }
}
