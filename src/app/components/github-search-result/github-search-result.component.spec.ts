import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchResultComponent } from './github-search-result.component';

describe('GithubSearchResultComponent', () => {
  let component: GithubSearchResultComponent;
  let fixture: ComponentFixture<GithubSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
