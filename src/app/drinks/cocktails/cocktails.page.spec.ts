import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsPage } from './cocktails.page';

describe('CocktailsPage', () => {
  let component: CocktailsPage;
  let fixture: ComponentFixture<CocktailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
