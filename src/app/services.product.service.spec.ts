import { TestBed } from '@angular/core/testing';

import { ServicesProductService } from './services.product.service';

describe('ServicesProductService', () => {
  let service: ServicesProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
