import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemloadingPage } from './itemloading.page';

describe('ItemloadingPage', () => {
  let component: ItemloadingPage;
  let fixture: ComponentFixture<ItemloadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemloadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemloadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
