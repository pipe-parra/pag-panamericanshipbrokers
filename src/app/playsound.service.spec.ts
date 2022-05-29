import { TestBed } from '@angular/core/testing';

import { PlaysoundService } from './playsound.service';

describe('PlaysoundService', () => {
  let service: PlaysoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaysoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
