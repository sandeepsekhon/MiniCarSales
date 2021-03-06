import { RouterModule } from '@angular/router';
import { AppConfig } from './app.config';
import { VehiclesService } from './vehicles/vehicles.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleEditComponent } from './vehicles/vehicle-edit/vehicle-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    VehiclesService,
    { provide: 'AppConfig', useClass: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
