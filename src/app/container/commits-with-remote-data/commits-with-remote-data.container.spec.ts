import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithRemoteDataContainer } from './commits-with-remote-data.container';

describe('CommitsWithRemoteDataComponent', () => {
  let component: CommitsWithRemoteDataContainer;
  let fixture: ComponentFixture<CommitsWithRemoteDataContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithRemoteDataContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithRemoteDataContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
