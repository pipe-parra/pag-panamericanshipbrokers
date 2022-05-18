import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasConstruccionesComponent } from './nuevas-construcciones.component';

describe('NuevasConstruccionesComponent', () => {
  let component: NuevasConstruccionesComponent;
  let fixture: ComponentFixture<NuevasConstruccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevasConstruccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasConstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
