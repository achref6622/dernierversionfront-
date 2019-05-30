import { TestBed } from '@angular/core/testing';

import { GestionnaireService } from './gestionnaire.service';

describe('GestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionnaireService = TestBed.get(GestionnaireService);
    expect(service).toBeTruthy();
  });
});
