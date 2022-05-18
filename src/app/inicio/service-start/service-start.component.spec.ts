import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStartComponent } from './service-start.component';

describe('ServiceStartComponent', () => {
  let component: ServiceStartComponent;
  let fixture: ComponentFixture<ServiceStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
