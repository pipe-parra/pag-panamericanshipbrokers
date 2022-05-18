import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departments2Component } from './departments2.component';

describe('Departments2Component', () => {
  let component: Departments2Component;
  let fixture: ComponentFixture<Departments2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departments2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departments2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
