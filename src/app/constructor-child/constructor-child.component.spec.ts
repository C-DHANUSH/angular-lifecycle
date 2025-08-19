import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorChildComponent } from './constructor-child.component';

describe('ConstructorChildComponent', () => {
  let component: ConstructorChildComponent;
  let fixture: ComponentFixture<ConstructorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
