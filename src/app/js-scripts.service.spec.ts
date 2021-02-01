import { TestBed } from '@angular/core/testing';

import { JsScriptsService } from './js-scripts.service';

describe('JsScriptsService', () => {
  let service: JsScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
