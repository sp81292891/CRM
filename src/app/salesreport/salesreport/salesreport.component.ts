import { Component, OnInit } from '@angular/core';
import {SalesreportService}from '../salesreport.service';
import * as _ from 'lodash';
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
bckupNalysys:any;
  constructor(private svc:SalesreportService) {
this.svc.getSalesAnalysys().pipe().subscribe((value:any)=>{
this.analysysList=value;
this.bckupNalysys=_.cloneDeep(value)
})
   }

  ngOnInit() {
  }
  onDeptClick(){

    if(this.selectedDept.toLocaleLowerCase()=="all"){
      this.selectedCategories=["Nursing Office","Marketing","OPD Treatment Room","Operation Theator","Pharmacy"];
    }else{
      this.selectedCategories=[];
    }
  }
  onSelectDate(){
    this.analysysList = this.bckupNalysys.filter((item: any) =>
    new Date(item.Date).getTime() >= this.frmDate.getTime() &&  new Date(item.Date).getTime() <= this.tdate.getTime()
);
  }

}
