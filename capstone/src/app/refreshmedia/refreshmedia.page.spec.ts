import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshmediaPage } from './refreshmedia.page';

describe('RefreshmediaPage', () => {
  let component: RefreshmediaPage;
  let fixture: ComponentFixture<RefreshmediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshmediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshmediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
