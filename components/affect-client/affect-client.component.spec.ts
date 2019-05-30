import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectClientComponent } from './affect-client.component';

describe('AffectClientComponent', () => {
  let component: AffectClientComponent;
  let fixture: ComponentFixture<AffectClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
