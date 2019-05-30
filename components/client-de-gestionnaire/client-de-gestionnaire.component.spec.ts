import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeGestionnaireComponent } from './client-de-gestionnaire.component';

describe('ClientDeGestionnaireComponent', () => {
  let component: ClientDeGestionnaireComponent;
  let fixture: ComponentFixture<ClientDeGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDeGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDeGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
