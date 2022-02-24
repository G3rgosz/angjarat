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

