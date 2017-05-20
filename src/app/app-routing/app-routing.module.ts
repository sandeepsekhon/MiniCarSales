import { VehicleEditComponent } from './../vehicles/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './../vehicles/vehicle-list/vehicle-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'vehicles',
        children: [
          { path: '', component: VehicleListComponent },
          { path: 'addvehicle/:type', component: VehicleEditComponent },
          { path: ':id/edit/:type', component: VehicleEditComponent }
        ]
      },
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
