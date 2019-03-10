import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithRemoteDataComponent } from './commits-with-remote-data.component';

describe('CommitsWithRemoteDataComponent', () => {
  let component: CommitsWithRemoteDataComponent;
  let fixture: ComponentFixture<CommitsWithRemoteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithRemoteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithRemoteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
