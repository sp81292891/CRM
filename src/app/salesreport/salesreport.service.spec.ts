import { TestBed } from '@angular/core/testing';

import { SalesreportService } from './salesreport.service';

describe('SalesreportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesreportService = TestBed.get(SalesreportService);
    expect(service).toBeTruthy();
  });
});
