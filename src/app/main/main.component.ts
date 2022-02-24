/*
* File: main.component.ts
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-02-24
* Github: https://github.com/gergosz-2000/angjarat
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../shared/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  vehicles:any;

  constructor(
    private vehi: VehiclesService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.vehi.getVehicles()
      .subscribe(res => {
        this.vehicles = res;
      });
  }
}

