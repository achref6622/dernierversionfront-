import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfeuilleComponent } from './portfeuille.component';

describe('PortfeuilleComponent', () => {
  let component: PortfeuilleComponent;
  let fixture: ComponentFixture<PortfeuilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfeuilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
