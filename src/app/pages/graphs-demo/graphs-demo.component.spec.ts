import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsDemoComponent } from './graphs-demo.component';

describe('GraphsDemoComponent', () => {
  let component: GraphsDemoComponent;
  let fixture: ComponentFixture<GraphsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
