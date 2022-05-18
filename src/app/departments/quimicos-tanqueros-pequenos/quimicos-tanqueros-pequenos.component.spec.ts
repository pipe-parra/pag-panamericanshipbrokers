import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicosTanquerosPequenosComponent } from './quimicos-tanqueros-pequenos.component';

describe('QuimicosTanquerosPequenosComponent', () => {
  let component: QuimicosTanquerosPequenosComponent;
  let fixture: ComponentFixture<QuimicosTanquerosPequenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuimicosTanquerosPequenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicosTanquerosPequenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
