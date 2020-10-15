import { TestBed } from '@angular/core/testing';

import { DetailsServiceService } from './details-service.service';

describe('DetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsServiceService = TestBed.get(DetailsServiceService);
    expect(service).toBeTruthy();
  });
});
