import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdreComponent } from './update-ordre.component';

describe('UpdateOrdreComponent', () => {
  let component: UpdateOrdreComponent;
  let fixture: ComponentFixture<UpdateOrdreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrdreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrdreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
