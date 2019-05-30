import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesOrdresComponent } from './mes-ordres.component';

describe('MesOrdresComponent', () => {
  let component: MesOrdresComponent;
  let fixture: ComponentFixture<MesOrdresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesOrdresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesOrdresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
