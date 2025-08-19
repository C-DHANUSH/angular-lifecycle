import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeParentComponent } from './onchange-parent.component';

describe('OnchangeParentComponent', () => {
  let component: OnchangeParentComponent;
  let fixture: ComponentFixture<OnchangeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnchangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
