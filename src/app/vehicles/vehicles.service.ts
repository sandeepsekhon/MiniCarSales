import { IAppConfig } from './../i-app-config.interface';
import { Guid } from 'app/core/type.aliases';
import { IVehicle } from './models/ivehicle';
import { Injectable, Injector, Inject } from '@angular/core';
import { Headers, RequestMethod, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiclesService {
  private apiUrl;
  constructor(private http: Http, protected injector: Injector, @Inject('AppConfig') protected config: IAppConfig) {
    this.apiUrl = config.apiUrl();
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
    const options = this.getRequestOptions();
    return this.http.put(this.apiUrl + '/' + vehicleType + '/' + id, vehicle, options);
  }

  postVehicle(vehicleType: string, vehicle: IVehicle) {
    vehicle.type = vehicleType;
    const options = this.getRequestOptions();
    const postUrl = this.apiUrl + '/' + vehicleType;
    return this.http.post(postUrl, JSON.stringify(vehicle), options);
  }

  getRequestOptions(){
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': this.config.siteUrl });
    return new RequestOptions({ headers: headers });
  }

}
