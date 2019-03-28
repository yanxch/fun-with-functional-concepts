import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithNgrxActionListenerContainer } from './commits-with-ngrx-action-listener.container';

describe('CommitsWithNgrxActionListenerComponent', () => {
  let component: CommitsWithNgrxActionListenerContainer;
  let fixture: ComponentFixture<CommitsWithNgrxActionListenerContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithNgrxActionListenerContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithNgrxActionListenerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
