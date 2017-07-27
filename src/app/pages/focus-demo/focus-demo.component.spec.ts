import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusDemoComponent } from './focus-demo.component';

describe('FocusDemoComponent', () => {
  let component: FocusDemoComponent;
  let fixture: ComponentFixture<FocusDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
