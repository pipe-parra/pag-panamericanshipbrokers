import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleNetworkComponent } from './people-network.component';

describe('PeopleNetworkComponent', () => {
  let component: PeopleNetworkComponent;
  let fixture: ComponentFixture<PeopleNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
