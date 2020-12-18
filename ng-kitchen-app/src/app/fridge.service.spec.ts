import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FridgeService } from './fridge.service';

describe('FridgeService', () => {
  let service: FridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: FridgeService, useValue: {} },
      ],
    });
    service = TestBed.inject(FridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
