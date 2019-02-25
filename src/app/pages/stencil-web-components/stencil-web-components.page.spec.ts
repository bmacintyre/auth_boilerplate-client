import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilWebComponentsPage } from './stencil-web-components.page';

describe('StencilWebComponentsPage', () => {
  let component: StencilWebComponentsPage;
  let fixture: ComponentFixture<StencilWebComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilWebComponentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilWebComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
