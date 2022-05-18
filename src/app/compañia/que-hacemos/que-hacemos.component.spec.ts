import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueHacemosComponent } from './que-hacemos.component';

describe('QueHacemosComponent', () => {
  let component: QueHacemosComponent;
  let fixture: ComponentFixture<QueHacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueHacemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
