import { TestBed, inject } from '@angular/core/testing';

import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclesService]
    });
  });

  it('should ...', inject([VehiclesService], (service: VehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
