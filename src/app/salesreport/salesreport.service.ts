import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SalesreportService {

  constructor(private _http:HttpClient) { }

  getSalesAnalysys(){
return this._http.get("../../assets/SalesAnalysys.json")
  }
}
