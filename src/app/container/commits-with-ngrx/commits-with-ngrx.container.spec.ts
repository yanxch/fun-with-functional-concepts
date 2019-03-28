import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithNgrxContainer } from './commits-with-ngrx.container';

describe('CommitsWithNgrxComponent', () => {
  let component: CommitsWithNgrxContainer;
  let fixture: ComponentFixture<CommitsWithNgrxContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithNgrxContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithNgrxContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
