import { TestBed } from '@angular/core/testing';

import { PicDetailsService } from './pic-details.service';

describe('PicDetailsService', () => {
  let service: PicDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
