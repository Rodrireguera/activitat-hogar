import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDetallComponent } from './element-detall.component';

describe('ElementDetallComponent', () => {
  let component: ElementDetallComponent;
  let fixture: ComponentFixture<ElementDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementDetallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
