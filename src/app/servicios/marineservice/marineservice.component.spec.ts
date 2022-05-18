import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineserviceComponent } from './marineservice.component';

describe('MarineserviceComponent', () => {
  let component: MarineserviceComponent;
  let fixture: ComponentFixture<MarineserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarineserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarineserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
