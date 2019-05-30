import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletClientComponent } from './delet-client.component';

describe('DeletClientComponent', () => {
  let component: DeletClientComponent;
  let fixture: ComponentFixture<DeletClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
