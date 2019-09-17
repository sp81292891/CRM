import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {PatientDetails,PrescriptionDetails} from '../crm.model'
import {CrmService} from '../crm.service'
import * as _ from 'lodash';
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
 @Input()displayPrescription:boolean;
 @Input() id:number;
 @Output("HidePrescription") hidePrescription=new EventEmitter<boolean>();
 patientId:SelectItem[];
 frmdate:Date=new Date();
 todate:Date=new Date();
 pDetails:PatientDetails[];
 selectedPrintOpt:boolean;
 prescriptionDetails:PrescriptionDetails[]
 bckupprescriptionDetails:PrescriptionDetails[]
  constructor(private svc:CrmService){
    this.patientId = [
      {label: '123', value: '123'},
      {label: '12356', value: '12356'},
      {label: '5321', value: '5321'},
      {label: '2345', value: '2345'}
  ];
   }

  ngOnInit() {
this.svc.getPatientDetails().pipe().subscribe((val:PatientDetails[])=>{
  this.pDetails=val.filter(a=>+a.paientId==this.id);
  this.svc.getPrescriptionDetails().pipe().subscribe((val:PrescriptionDetails[])=>{
    this.prescriptionDetails=val.filter(a=>+a.paientId==this.id);
    this.bckupprescriptionDetails=_.cloneDeep(this.prescriptionDetails)
  })
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
  onSelectDate(){
    this.prescriptionDetails = this.bckupprescriptionDetails.filter((item: any) =>
    new Date(item.date).getTime() >= this.frmdate.getTime() &&  new Date(item.date).getTime() <= this.todate.getTime()
);
  }

}
