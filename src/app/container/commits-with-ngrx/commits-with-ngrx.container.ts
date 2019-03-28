import {Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from 'src/api/commits.api';
import {LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {commits, commitsFailuerState, commitsLoadingState} from 'src/state/selectors/commits.selectors';
import {onChange} from 'src/app/util/input-changed';

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
