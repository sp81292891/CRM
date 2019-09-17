import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(private _http:HttpClient) { }

  getPrescription(){
return this._http.get("../../assets/prescription.json")
  }
  getPatientDetails(){
    return this._http.get("../../assets/Patient.json")
  }
  getPatientDetailsById(){
    return this._http.get("../../assets/PatientDetails.json")
  }
  getPrescriptionDetails(){
    return this._http.get("../../assets/prescriptionDetails.json")
  }
}
