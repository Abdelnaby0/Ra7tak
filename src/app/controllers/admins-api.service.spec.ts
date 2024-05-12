import { TestBed } from '@angular/core/testing';

import { AdminsApiService } from './admins-api.service';

describe('AdminsApiService', () => {
  let service: AdminsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
