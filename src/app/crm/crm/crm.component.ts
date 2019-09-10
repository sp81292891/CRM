import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import * as moment from 'moment'
import{Crm} from '../crm.model';
import {CrmService} from '../crm.service'
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
 billNum:SelectItem[];
 billDate:string=moment().format("DD/MM/YYYY");
 billTime:string=moment().format("HH:mm");
 patientName:string="John Doe";
 patientId:SelectItem[];
 selectedGender:string="Male";
 doctorNames:SelectItem[];
 selectedTransaction:string="Cash";
 prescriptionList:Crm[];
 isPrescription:boolean;
  constructor(private svc:CrmService) { 
    this.billNum = [
      {label: '123', value: '123'},
      {label: '12356', value: '1235'},
      {label: '5321', value: '6795'},
      {label: '2345', value: '5673'}
  ];
  this.patientId = [
    {label: '123', value: '123'},
    {label: '12356', value: '1235'},
    {label: '5321', value: '6795'},
    {label: '2345', value: '5673'}
];
this.doctorNames = [
  {label: 'Dr. Tony Stark', value: '123'},
  {label: 'Dr. Ram Madhav', value: '1235'},
  {label: 'Dr. Robert Jr', value: '6795'},
  {label: 'Dr. Cathy Stark', value: '5673'}
];

  }

  ngOnInit() {
    this.svc.getPrescription().pipe().subscribe((presc:Crm[])=>{
       this.prescriptionList=presc;
    })
  }

  showPrescription(){
    this.isPrescription=true;
  }
}

