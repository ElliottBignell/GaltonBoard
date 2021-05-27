import { TestBed } from '@angular/core/testing';

import { GaltonRunnerService } from './galton-runner.service';

describe('GaltonRunnerService', () => {
  let service: GaltonRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaltonRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
