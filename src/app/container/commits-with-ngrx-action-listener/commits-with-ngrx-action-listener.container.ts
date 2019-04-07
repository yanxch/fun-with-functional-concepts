import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from 'src/api/commits.api';
import {onChange} from 'src/app/util/input-changed';
import {CommitActionTypes, CommitsActionsUnion, LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {selectFailures, selectLoading} from 'src/state/selectors/commits-action.selectors';
import {commits} from 'src/state/selectors/commits.selectors';

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

