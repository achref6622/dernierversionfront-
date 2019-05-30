import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePortfeuilleComponent } from './update-portfeuille.component';

describe('UpdatePortfeuilleComponent', () => {
  let component: UpdatePortfeuilleComponent;
  let fixture: ComponentFixture<UpdatePortfeuilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePortfeuilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePortfeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
