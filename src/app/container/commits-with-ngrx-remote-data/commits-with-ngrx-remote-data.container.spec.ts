import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithNgrxRemoteDataContainer } from './commits-with-ngrx-remote-data.container';

describe('CommitsWithNgrxRemoteDataComponent', () => {
  let component: CommitsWithNgrxRemoteDataContainer;
  let fixture: ComponentFixture<CommitsWithNgrxRemoteDataContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithNgrxRemoteDataContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithNgrxRemoteDataContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
