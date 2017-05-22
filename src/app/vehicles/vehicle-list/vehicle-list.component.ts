import { VehiclesService } from './../vehicles.service';
import { IVehicle } from '../models/ivehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles;
  constructor(private vehicleService: VehiclesService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      data=>{
        this.vehicles = data;        
      },
      error=>{
        this.onServerError(error);
      }
    );
  }

  onServerError(error: any) {

  }

}
