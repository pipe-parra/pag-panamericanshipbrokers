import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shipbroking1Component } from './shipbroking1.component';

describe('Shipbroking1Component', () => {
  let component: Shipbroking1Component;
  let fixture: ComponentFixture<Shipbroking1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shipbroking1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shipbroking1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
