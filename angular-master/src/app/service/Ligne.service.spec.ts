import { TestBed } from '@angular/core/testing';

import { LigneService } from './LigneService';

describe('LigneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigneService = TestBed.get(LigneService);
    expect(service).toBeTruthy();
  });
});
