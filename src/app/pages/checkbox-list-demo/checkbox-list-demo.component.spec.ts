import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListDemoComponent } from './checkbox-list-demo.component';

describe('CheckboxListDemoComponent', () => {
  let component: CheckboxListDemoComponent;
  let fixture: ComponentFixture<CheckboxListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
