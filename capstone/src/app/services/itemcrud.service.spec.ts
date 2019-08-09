import { TestBed } from '@angular/core/testing';

import { ItemcrudService } from './itemcrud.service';

describe('ItemcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemcrudService = TestBed.get(ItemcrudService);
    expect(service).toBeTruthy();
  });
});
