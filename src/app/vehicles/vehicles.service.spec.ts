import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { VehiclesService } from './vehicles.service';
import { AppConfig } from 'app/app.config';

describe('VehiclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
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
    });
  });

  it('should ...', inject([VehiclesService], (service: VehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
