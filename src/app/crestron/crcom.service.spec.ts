import { TestBed } from '@angular/core/testing';

import { CrcomService } from './crcom.service';

describe('CrcomService', () => {
  let service: CrcomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrcomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
