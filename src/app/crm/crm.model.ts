export class Crm {
no:string;
itemCode:string;
description:string;
unit:string;
batchNum:string;
expDate:string;
qty:string;
lzqty:string;
price:string;
disc:string;
discAmnt:string;
amount:string;
paientId:string;
}

export class PatientDetails{
    paientId:string;
    name:string;
    ipNum:string;
    bedname:string;
    nursingstation:string;
}

export class PatientDetailsById{
    paientId:string;
    name:string;
    Age:string;
    Gender:string;
    Adress:string;
    PatientDayTotal:string;
    Customercode:string;
    DoctorName:string;
    Modeofpayment:string;
    CustomerClass:string;
}

export class PrescriptionDetails{
    paientId:string;
    date:string;
    itemCode:string;
    itemName:string;
    dosage:string;
    duration:string;
    balance:string;
    Duration:string;
    Balance:string;
    Remarks:string;
    consid:string;
    patid:string;
}