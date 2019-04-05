import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {merge, Observable} from 'rxjs';
import {map, mapTo, tap} from 'rxjs/operators';
import {Commit} from 'src/api/commits.api';
import {onChange} from 'src/app/util/input-changed';
import {CommitActionTypes, CommitsActionsUnion, LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {commits, commitsLoadingState} from 'src/state/selectors/commits.selectors';

@Component({
  selector: 'commits-with-ngrx-action-listener-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithNgrxActionListenerContainer implements OnChanges {

  @Input()
  username: string;

  // Shared State
  commits$: Observable<Commit[]>;
  //
  // Local State
  failures$: Observable<Failure[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private actions$: Actions<CommitsActionsUnion>) {
    this.commits$ = this.store.select(commits);
    // this.loading$ = this.store.select(commitsLoadingState);

    this.loading$ = this.actions$.pipe(loading(CommitActionTypes.LoadCommits));
    this.failures$ = this.actions$.pipe(failures(CommitActionTypes.LoadCommits));
  }
   
  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommits);
  }

  loadCommits = (username) => {
    this.store.dispatch(new LoadCommits({ username: username }));
  }
}

const loading = (actiontype: string) => (source: Observable<any>) => merge(
  source.pipe(ofType(actiontype), tap(a => console.log('Loading', a)), mapTo(true)),
  source.pipe(ofType(actiontype + ' Failure'), tap(a => console.log('Loading Error', a)), mapTo(false)),
  source.pipe(ofType(actiontype + ' Success'), tap(a => console.log('Loading Success', a)), mapTo(false))
);

const failures = (actiontype: string) => (source: Observable<any>) => merge(
  source.pipe(ofType(actiontype), mapTo([])),
  source.pipe(ofType(actiontype + ' Failure'), map((action: any) => action.payload.errors))
);
