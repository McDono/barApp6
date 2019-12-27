import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkNewPage } from './drink-new.page';

describe('DrinkNewPage', () => {
  let component: DrinkNewPage;
  let fixture: ComponentFixture<DrinkNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
