import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Commit} from 'src/api/commits.api';
import {CommitActionTypes, CommitsActionsUnion, LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {commits, commitsLoadingState} from 'src/state/selectors/commits.selectors';
import {onChange} from 'src/app/util/input-changed';

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
  failures$ = new BehaviorSubject<Failure[]>([]);
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private actions$: Actions<CommitsActionsUnion>) {
    this.commits$ = this.store.select(commits);
    this.loading$ = this.store.select(commitsLoadingState);

    this.actions$
      .pipe(
        ofType(CommitActionTypes.LoadCommitsFailure),
        map(() => [new Failure('An error occured')]),
      )
      .subscribe(this.failures$);
  }
   
  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommits);
  }

  loadCommits = (username) => {
    this.failures$.next([]); 
    this.store.dispatch(new LoadCommits({ username: username }));
  }
}
