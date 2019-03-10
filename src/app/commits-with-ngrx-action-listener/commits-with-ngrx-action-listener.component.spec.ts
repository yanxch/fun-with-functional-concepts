import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithNgrxActionListenerComponent } from './commits-with-ngrx-action-listener.component';

describe('CommitsWithNgrxActionListenerComponent', () => {
  let component: CommitsWithNgrxActionListenerComponent;
  let fixture: ComponentFixture<CommitsWithNgrxActionListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithNgrxActionListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithNgrxActionListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
