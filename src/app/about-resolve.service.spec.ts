import { TestBed, inject } from '@angular/core/testing';

import { AboutUsersResolve } from './about-resolve.service';

describe('AboutUsersResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUsersResolve]
    });
  });

  it('should be created', inject([AboutUsersResolve], (service: AboutUsersResolve) => {
    expect(service).toBeTruthy();
  }));
});
