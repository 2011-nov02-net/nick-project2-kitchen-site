import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FridgeItem } from '../fridge-item';
import { FridgeService } from '../fridge.service';

import { KitchenComponent } from './kitchen.component';

describe('KitchenComponent', () => {
  let component: KitchenComponent;
  let fixture: ComponentFixture<KitchenComponent>;
  let fakeFridgeService = {
    getFridgeItems(): Promise<FridgeItem[]> {
      return Promise.resolve([]);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenComponent],
      providers: [{ provide: FridgeService, useValue: fakeFridgeService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
