import { Injectable } from '@angular/core';
import {Country} from '../model/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  private countrylist:Country[];
  constructor(private http:HttpClient) {
     
  }

  getCountries():Observable<Object>{
    return this.http.get("http://localhost:4004/countries/getall");
  }


}
