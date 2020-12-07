import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheriquesComponent } from './peripheriques.component';

describe('PeripheriquesComponent', () => {
  let component: PeripheriquesComponent;
  let fixture: ComponentFixture<PeripheriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeripheriquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
