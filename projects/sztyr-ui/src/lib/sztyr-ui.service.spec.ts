import { TestBed } from '@angular/core/testing';

import { SZtyrUIService } from './sztyr-ui.service';

describe('SZtyrUIService', () => {
  let service: SZtyrUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SZtyrUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
