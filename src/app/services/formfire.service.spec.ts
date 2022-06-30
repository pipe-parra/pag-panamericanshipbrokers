import { TestBed } from '@angular/core/testing';

import { FormfireService } from './formfire.service';

describe('FormfireService', () => {
  let service: FormfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
