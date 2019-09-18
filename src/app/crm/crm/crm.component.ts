import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import * as moment from 'moment'
import{Crm,PatientDetailsById} from '../crm.model';
import {CrmService} from '../crm.service'
import * as _ from 'lodash'
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
 billNum:SelectItem[];
 custClass:SelectItem[];
 CustomerCode:SelectItem[];
 billDate:string=moment().format("DD/MM/YYYY");
 billTime:string=moment().format("HH:mm");
 patientName:string="John Doe";
 patientId:any;
 patientIds:string[];
 selectedGender:string="Male";
 doctorNames:SelectItem[];
 selectedTransaction:string="Cash";
 prescriptionList:Crm[];
 isPrescription:boolean;
 selectedPatientId:number=123;
 patientDetailsById:PatientDetailsById;
 TotalAmount:number=0;
 grossamount:number=0;
 tax:number=2;
  constructor(private svc:CrmService) { 
    this.billNum = [
      {label: '123', value: '123'},
      {label: '12356', value: '12356'},
      {label: '5321', value: '5321'},
      {label: '2345', value: '2345'}
  ];
  this.patientIds = ['123' ,'12356', '5321','2345'];
this.doctorNames = [
  {label: 'Dr. Tony Stark', value: '123'},
  {label: 'Dr. Ram Madhav', value: '1235'},
  {label: 'Dr. Robert Jr', value: '6795'},
  {label: 'Dr. Cathy Stark', value: '5673'}
];
this.custClass = [
  {label: '12', value: '12'},
  {label: '13', value: '13'},
  {label: '14', value: '14'},
  {label: '15', value: '15'}
];
this.CustomerCode= [
  {label: '1', value: '1'},
  {label: '3', value: '3'},
  {label: '4', value: '4'},
  {label: '5', value: '5'}
];
  }

  ngOnInit() {
    this.patientDetailsById=new PatientDetailsById;
    this.svc.getPatientDetailsById().pipe().subscribe((val:PatientDetailsById[])=>{
      this.patientDetailsById=val.find(a=>+a.paientId==this.selectedPatientId)

    this.svc.getPrescription().pipe().subscribe((presc:Crm[])=>{
       this.prescriptionList=presc.filter(a=>+a.paientId==this.selectedPatientId);
       this.TotalAmount=0;
       _.each(this.prescriptionList,(v:Crm)=>{
        this.TotalAmount=(+v.amount-+v.discAmnt)+this.TotalAmount
      })
      this.grossamount=_.cloneDeep(this.TotalAmount)
      this.TotalAmount=this.TotalAmount+(+(this.tax/100).toFixed(2))
    })
    
    })
  }

  showPrescription(){
    this.isPrescription=true;
  }
  onChangePatient(){
    this.tax=2;
    this.svc.getPatientDetailsById().pipe().subscribe((val:PatientDetailsById[])=>{
      this.patientDetailsById=val.find(a=>+a.paientId==this.selectedPatientId)
      this.svc.getPrescription().pipe().subscribe((presc:Crm[])=>{
        this.prescriptionList=presc.filter(a=>+a.paientId==this.selectedPatientId);
        this.TotalAmount=0;
        _.each(this.prescriptionList,(v:Crm)=>{
          this.TotalAmount=(+v.amount-+v.discAmnt)+this.TotalAmount
        })
        this.grossamount=_.cloneDeep(this.TotalAmount)
        this.TotalAmount=this.TotalAmount+(+(this.tax/100).toFixed(2))
     })
    })

  }
  CalTax(val:number){
    if(!isNaN(val))
    this.TotalAmount=+(this.grossamount+(+(val/100).toFixed(2))).toFixed(2)
    
  }
  getPIds(event:any){
if(!isNaN(event.query)){
  this.patientId=this.patientIds.filter(a=>a.includes(event.query))
}
  }
}

