import { TestBed, inject } from '@angular/core/testing';

import { ApiProductService } from './api-product.service';

describe('ApiProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProductService]
    });
  });

  it('should be created', inject([ApiProductService], (service: ApiProductService) => {
    expect(service).toBeTruthy();
  }));
});
