/*
* File: vehicles.service.ts
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-02-24
* Github: https://github.com/gergosz-2000/angjarat
* Licenc: GNU GPL
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  host = 'http://localhost:8000/api/';
  constructor(private http: HttpClient,private router: Router) { }
  getVehicles(){
    let endpoint = 'vehicles';
    let url = this.host + endpoint;
    return this.http.get<any>(url);
  }
  postVehicles(plate: string, brand: string, year: string, price: string, sold: string){
    let vData = {
      plate: plate,
      brand: brand,
      year: year,
      price: price,
      sold: sold
    }
    let data = JSON.stringify(vData);

    let udata:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(udata);
    let token = currentUser.token;

    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let header = {
      headers: headerObj
    }
    let endpoint = 'vehicles';
    let url = this.host + endpoint;
    return this.http.post<any>(url, data, header);
  }
}
