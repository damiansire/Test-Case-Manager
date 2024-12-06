import { TestBed } from '@angular/core/testing';

import { StorysService } from './storys.service';

describe('StorysService', () => {
  let service: StorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
