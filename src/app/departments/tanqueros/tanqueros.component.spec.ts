import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquerosComponent } from './tanqueros.component';

describe('TanquerosComponent', () => {
  let component: TanquerosComponent;
  let fixture: ComponentFixture<TanquerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanquerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanquerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
