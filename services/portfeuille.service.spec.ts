import { TestBed } from '@angular/core/testing';

import { PortfeuilleService } from './portfeuille.service';

describe('PortfeuilleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfeuilleService = TestBed.get(PortfeuilleService);
    expect(service).toBeTruthy();
  });
});
