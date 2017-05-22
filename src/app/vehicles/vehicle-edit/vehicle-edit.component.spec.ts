import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { VehicleEditComponent } from './vehicle-edit.component';
import { FormsModule } from '@angular/forms';
import { VehiclesService } from 'app/vehicles/vehicles.service';
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { AppConfig } from 'app/app.config';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { VehicleListComponent } from 'app/vehicles/vehicle-list/vehicle-list.component';
import {APP_BASE_HREF} from '@angular/common';
describe('VehicleEditComponent', () => {
  let component: VehicleEditComponent;
  let fixture: ComponentFixture<VehicleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, AppRoutingModule],
      declarations: [VehicleEditComponent, VehicleListComponent],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: 'AppConfig', useClass: AppConfig },
        {provide: APP_BASE_HREF, useValue: '/'},
        VehiclesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
