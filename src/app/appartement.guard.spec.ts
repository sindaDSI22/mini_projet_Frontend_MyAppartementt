import { TestBed } from '@angular/core/testing';

import { AppartementGuard } from './appartement.guard';

describe('AppartementGuard', () => {
  let guard: AppartementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppartementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
