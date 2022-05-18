import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departments3Component } from './departments3.component';

describe('Departments3Component', () => {
  let component: Departments3Component;
  let fixture: ComponentFixture<Departments3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departments3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departments3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
