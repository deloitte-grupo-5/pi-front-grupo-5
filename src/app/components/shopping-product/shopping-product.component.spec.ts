import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingProductComponent } from './shopping-product.component';

describe('ShoppingProductComponent', () => {
  let component: ShoppingProductComponent;
  let fixture: ComponentFixture<ShoppingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
