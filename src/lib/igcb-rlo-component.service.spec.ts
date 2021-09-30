import { TestBed } from '@angular/core/testing';

import { IgcbRloComponentService } from './igcb-rlo-component.service';

describe('IgcbRloComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IgcbRloComponentService = TestBed.get(IgcbRloComponentService);
    expect(service).toBeTruthy();
  });
});
