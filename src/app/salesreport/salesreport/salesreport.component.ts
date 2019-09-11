import { Component, OnInit } from '@angular/core';
import {SalesreportService}from '../salesreport.service';
@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.scss']
})
export class SalesreportComponent implements OnInit {
frmDate=new Date();
tdate=new Date();
selectedDept:string="slctd";
selectedCategories:string[];
analysysList:any;
  constructor(private svc:SalesreportService) {
this.svc.getSalesAnalysys().pipe().subscribe((value:any)=>{
this.analysysList=value;
})
   }

  ngOnInit() {
  }
  onDeptClick(){
debugger;
    if(this.selectedDept.toLocaleLowerCase()=="all"){
      this.selectedCategories=["Nursing Office","Marketing","OPD Treatment Room","Operation Theator","Pharmacy"];
    }else{
      this.selectedCategories=[];
    }
  }
}
