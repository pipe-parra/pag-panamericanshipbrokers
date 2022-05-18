import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketintelligenceComponent } from './marketintelligence.component';

describe('MarketintelligenceComponent', () => {
  let component: MarketintelligenceComponent;
  let fixture: ComponentFixture<MarketintelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketintelligenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketintelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
