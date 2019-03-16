import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsWithServiceComponent } from './commits-with-service.component';

describe('CommitsWithServiceComponent', () => {
  let component: CommitsWithServiceComponent;
  let fixture: ComponentFixture<CommitsWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
