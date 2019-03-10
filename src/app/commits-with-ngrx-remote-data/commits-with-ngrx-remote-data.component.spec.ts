import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithNgrxRemoteDataComponent } from './commits-with-ngrx-remote-data.component';

describe('CommitsWithNgrxRemoteDataComponent', () => {
  let component: CommitsWithNgrxRemoteDataComponent;
  let fixture: ComponentFixture<CommitsWithNgrxRemoteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithNgrxRemoteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithNgrxRemoteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
