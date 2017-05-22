import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { VehicleListComponent } from './vehicle-list.component';
import { RouterLinkStubDirective } from 'app/testing/router-link-stub.directive';
import { RouterModule } from '@angular/router';
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { VehiclesService } from 'app/vehicles/vehicles.service';
import { AppConfig } from 'app/app.config';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent, RouterLinkStubDirective
      ],
      imports:[RouterModule, RouterTestingModule, HttpModule],
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
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
