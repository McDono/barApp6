import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotsPage } from './shots.page';

describe('ShotsPage', () => {
  let component: ShotsPage;
  let fixture: ComponentFixture<ShotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
