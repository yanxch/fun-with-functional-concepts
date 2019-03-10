import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithNgrxComponent } from './commits-with-ngrx.component';

describe('CommitsWithNgrxComponent', () => {
  let component: CommitsWithNgrxComponent;
  let fixture: ComponentFixture<CommitsWithNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
