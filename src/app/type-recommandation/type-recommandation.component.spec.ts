/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypeRecommandationComponent } from './type-recommandation.component';

describe('TypeRecommandationComponent', () => {
  let component: TypeRecommandationComponent;
  let fixture: ComponentFixture<TypeRecommandationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeRecommandationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
