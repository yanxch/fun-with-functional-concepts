import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from '@api/commits.api';
import {Failure} from '@state/model/failure';
import {AppState} from '@state/reducers';
import {CommitsActionsUnion, CommitActionTypes, LoadCommits} from '@state/actions/commits.actions';
import {commits} from '@state/selectors/commits.selectors';
import {selectLoading, selectFailures} from '@state/selectors/commits-action.selectors';
import {onChange} from '@uitl/input-changed';

@Component({
  selector: 'commits-with-ngrx-action-listener-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithNgrxActionListenerContainer implements OnChanges {

  @Input()
  username: string;

  commits$: Observable<Commit[]>;
  failures$: Observable<Failure[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private actions$: Actions<CommitsActionsUnion>) {
    this.commits$ = this.store.select(commits);

    this.loading$ = this.actions$.pipe(selectLoading(CommitActionTypes.LoadCommits));
    this.failures$ = this.actions$.pipe(selectFailures(CommitActionTypes.LoadCommits));
  }
   
  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommits);
  }

  loadCommits = (username) => {
    this.store.dispatch(new LoadCommits({ username: username }));
  }
}

