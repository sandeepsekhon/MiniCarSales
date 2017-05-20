import { IAppConfig } from './../i-app-config.interface';
import { Guid } from 'app/core/type.aliases';
import { IVehicle } from './models/ivehicle';
import { Injectable, Injector, Inject } from '@angular/core';
import { Headers, RequestMethod, Http, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class VehiclesService {
  private apiUrl;
  constructor(private http: Http, protected injector: Injector, @Inject('AppConfig') protected config: IAppConfig) {
    this.apiUrl = 'http://localhost:49020/api';
  }

  getVehicles() {
    return this.http.get(this.apiUrl + '/vehicles')
      .map(data => data.json());
  }

  getVehicle(id: Guid) {
    return this.http.get(this.apiUrl + '/vehicles/' + id)
      .map(data => data.json() as IVehicle);
  }

  putVehicle(id: Guid, vehicleType: string, vehicle: IVehicle): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiUrl + '/' + vehicleType + '/' + id, vehicle, options);
  }

  postVehicle(vehicleType: string, vehicle: IVehicle) {
    vehicle.type = vehicleType;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = this.apiUrl + '/' + vehicleType;
    console.log(postUrl);
    return this.http.post(postUrl, JSON.stringify(vehicle), options);
  }

}
