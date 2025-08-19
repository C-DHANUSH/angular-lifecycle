import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeChildComponent } from './onchange-child.component';

describe('OnchangeChildComponent', () => {
  let component: OnchangeChildComponent;
  let fixture: ComponentFixture<OnchangeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangeChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnchangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
