import {Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from '@api/commits.api';
import {Failure} from '@state/model/failure';
import {AppState} from '@state/reducers';
import {commits, commitsLoadingState, commitsFailuerState} from '@state/selectors/commits.selectors';
import {onChange} from '@uitl/input-changed';
import {LoadCommits} from '@state/actions/commits.actions';

@Component({
  selector: 'commits-with-ngrx-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithNgrxContainer implements OnChanges {

  @Input() username: string;

  commits$: Observable<Commit[]>;
  loading$: Observable<boolean>;
  failures$: Observable<Failure[]>;

  constructor(private store: Store<AppState>) {
    this.commits$ = this.store.select(commits);
    this.loading$ = this.store.select(commitsLoadingState);
    this.failures$ = this.store.select(commitsFailuerState);
  }
  
  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommits);
  }
  
  loadCommits = (username) => {
    this.store.dispatch(new LoadCommits({ username }));
  }
}
