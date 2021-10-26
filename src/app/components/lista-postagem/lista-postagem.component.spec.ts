import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostagemComponent } from './lista-postagem.component';

describe('ListaPostagemComponent', () => {
  let component: ListaPostagemComponent;
  let fixture: ComponentFixture<ListaPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
