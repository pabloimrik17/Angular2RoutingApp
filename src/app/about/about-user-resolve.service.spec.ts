import { TestBed, inject } from '@angular/core/testing';

import { AboutUserResolve } from './about-user-resolve.service';

describe('AboutUserResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUserResolve]
    });
  });

  it('should be created', inject([AboutUserResolve], (service: AboutUserResolve) => {
    expect(service).toBeTruthy();
  }));
});
