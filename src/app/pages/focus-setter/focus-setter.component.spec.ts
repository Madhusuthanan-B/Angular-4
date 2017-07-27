import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusSetterComponent } from './focus-setter.component';

describe('FocusSetterComponent', () => {
  let component: FocusSetterComponent;
  let fixture: ComponentFixture<FocusSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
