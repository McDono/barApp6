import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirginsPage } from './virgins.page';

describe('VirginsPage', () => {
  let component: VirginsPage;
  let fixture: ComponentFixture<VirginsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirginsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
