import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../shared/vehicles.service';
@Component({
  selector: 'app-vehiclestable',
  templateUrl: './vehiclestable.component.html',
  styleUrls: ['./vehiclestable.component.css']
})
export class VehiclestableComponent implements OnInit {
  vehicles = this.vehi.getVehicles();
  constructor(
    private vehi: VehiclesService
  ) { }

  ngOnInit(): void {
  }

}
