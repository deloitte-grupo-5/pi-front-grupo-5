import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBillingComponent } from './shopping-billing.component';

describe('ShoppingBillingComponent', () => {
  let component: ShoppingBillingComponent;
  let fixture: ComponentFixture<ShoppingBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
