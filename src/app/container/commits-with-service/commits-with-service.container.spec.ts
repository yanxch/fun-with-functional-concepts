import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithServiceContainer } from './commits-with-service.container';

describe('CommitsWithServiceComponent', () => {
  let component: CommitsWithServiceContainer;
  let fixture: ComponentFixture<CommitsWithServiceContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithServiceContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithServiceContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
