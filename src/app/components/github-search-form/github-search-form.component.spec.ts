import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchFormComponent } from './github-search-form.component';

describe('GithubSearchFormComponent', () => {
  let component: GithubSearchFormComponent;
  let fixture: ComponentFixture<GithubSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
