import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGestionnaireComponent } from './add-gestionnaire.component';

describe('AddGestionnaireComponent', () => {
  let component: AddGestionnaireComponent;
  let fixture: ComponentFixture<AddGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
