import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListComponent } from './checkbox-list.component';

describe('CheckboxListComponent', () => {
  let component: CheckboxListComponent;
  let fixture: ComponentFixture<CheckboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxListComponent);
    component = fixture.componentInstance;
    component.checkBoxList = {
      checkboxes: [{ name: 'Option1', value: 'Option 1', label: '' }]
    };
    fixture.detectChanges();
  });

  describe('When a checkbox list component is initialized, then ngOnInit()', () => {

    it('should activate checkbox list only if input data is present ', () => {
      expect(component.enableCheckBoxList).toBeTruthy();
    });

  });

});
