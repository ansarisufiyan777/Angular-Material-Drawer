import { TestBed } from '@angular/core/testing';

import { NgxMaterialDrawerService } from './ngx-material-drawer.service';

describe('NgxMaterialDrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaterialDrawerService = TestBed.get(NgxMaterialDrawerService);
    expect(service).toBeTruthy();
  });
});
