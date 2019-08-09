import { TestBed } from '@angular/core/testing';

import { MarctagsService } from './marctags.service';

describe('MarctagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarctagsService = TestBed.get(MarctagsService);
    expect(service).toBeTruthy();
  });
});
