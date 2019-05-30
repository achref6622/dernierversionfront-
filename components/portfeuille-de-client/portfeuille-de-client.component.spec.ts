import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfeuilleDeClientComponent } from './portfeuille-de-client.component';

describe('PortfeuilleDeClientComponent', () => {
  let component: PortfeuilleDeClientComponent;
  let fixture: ComponentFixture<PortfeuilleDeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfeuilleDeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfeuilleDeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
