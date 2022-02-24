/*
* File: vehicles.component.ts
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-02-24
* Github: https://github.com/gergosz-2000/angjarat
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { VehiclesService } from '../shared/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  newvehicleForm !: FormGroup

  constructor(
    private auth: AuthService,
    private vehi: VehiclesService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.vehi.getVehicles();
    this.newvehicleForm = new FormGroup({
      plate: new FormControl(''),
      brand: new FormControl(''),
      year: new FormControl(''),
      price: new FormControl(''),
      sold: new FormControl('')
    });
  }
  newvehicle(){
    let plate = this.newvehicleForm.value.plate;
    let brand = this.newvehicleForm.value.brand;
    let year = this.newvehicleForm.value.year;
    let price = this.newvehicleForm.value.price;
    let sold = this.newvehicleForm.value.sold;

    this.vehi.postVehicles(plate, brand, year, price, sold)
    .subscribe(res => {
      console.log(res);
      if (res != 0) {
        // console.log(res.success);
        alert("Sikeres felvétel");
      }else{
        alert("A felvétel sikertelen!");
      }
    })
  }
  logout(){
    this.auth.logout();
  }
}
