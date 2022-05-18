import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTestimoniosComponent } from './client-testimonios.component';

describe('ClientTestimoniosComponent', () => {
  let component: ClientTestimoniosComponent;
  let fixture: ComponentFixture<ClientTestimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTestimoniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
