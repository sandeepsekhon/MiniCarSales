import { Bike } from './../models/bike';
import { Vehicle } from '../models/vehicle';
import { Car } from './../models/car';
import { FormHelperService } from './../../core/form-helper.service';
import { NgModel, NgForm } from '@angular/forms';
import { VehiclesService } from './../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'app/core/type.aliases';
import { IVehicle } from '../models/ivehicle';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})

export class VehicleEditComponent implements OnInit {
  private id: Guid;
  protected vehicle;
  private vehicleType: string;
  protected serverErrors: any = {};
  constructor(private vehicleService: VehiclesService, private router: Router, private route: ActivatedRoute) { }
  @ViewChild('form')
  protected form: NgForm;
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.vehicleType = params['type'];
        this.id = params['id'];
        console.log(this.vehicleType);
        if (this.id && this.id != undefined) {
          this.vehicleService.getVehicle(this.id).subscribe(
            data => {
              if (this.vehicleType === 'car') {
                this.vehicle = data as Car;                
              }
              else if (this.vehicleType === 'bike') {
                this.vehicle = data as Bike;                
              }
              console.log(this.vehicle);

            },
            error => console.log(error)
          );
        }
        else {
          if (this.vehicleType === 'car') {
            this.vehicle = new Car();
            this.vehicle.type = 'car';
          }
          else if (this.vehicleType === 'bike') {
            this.vehicle = new Bike();
            this.vehicle.type = 'bike';
          }
          else {
            this.vehicle = new Vehicle();
          }
        }
      }
    );
  }
  hasError(field: NgModel, validationName?: string): boolean {
    return FormHelperService.hasError(field, this.form, validationName);
  }

  onServerError(error: any) {
    this.serverErrors = {};
    // todo clear existing server errors more intelligently
    if (error._body && typeof error._body == "string") {
      let parse = JSON.parse(error._body);
      if (typeof parse == "object" && parse.modelState) {
        this.serverErrors = parse.modelState;
      }
    }
    if (Object.keys(this.serverErrors).length) {
      Object.keys(this.form.controls).forEach(key => {
        if (this.serverErrors[key]) {
          this.form.controls[key].setErrors({ 'server': this.serverErrors[key][0] })
        }
      });
    }
  }

  save() {
    if (this.id && this.id != undefined) {
      if (this.vehicle) {
        this.vehicleService.putVehicle(this.id, this.vehicleType, this.vehicle).subscribe(
          () => this.saveComplete()
        );

      }
    }
    else {
      this.vehicleService.postVehicle(this.vehicleType, this.vehicle).subscribe(
        () => this.saveComplete()
      );
    }
  }

  saveComplete() {
    this.router.navigate(['/vehicles']);
  }
}
