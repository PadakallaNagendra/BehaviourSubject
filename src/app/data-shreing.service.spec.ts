import { TestBed } from '@angular/core/testing';

import { DataShreingService } from './data-shreing.service';

describe('DataShreingService', () => {
  let service: DataShreingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataShreingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
