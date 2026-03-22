import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorIndustrialesComponent } from './buscador-industriales.component';

describe('BuscadorIndustrialesComponent', () => {
  let component: BuscadorIndustrialesComponent;
  let fixture: ComponentFixture<BuscadorIndustrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorIndustrialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
