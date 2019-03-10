import {Component, OnInit} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {Commit} from 'src/api/commits.api';
import {CommitsActionsUnion, LoadCommits, CommitActionTypes} from 'src/state/actions/commits.actions';
import {AppState} from 'src/state/reducers';
import {commits} from 'src/state/selectors/commits.selectors';
import {map, tap} from 'rxjs/operators';
import {Failure} from 'src/state/model/failure';

@Component({
  selector: 'commits-with-ngrx-action-listener',
  templateUrl: './commits-with-ngrx-action-listener.component.html',
  styleUrls: ['./commits-with-ngrx-action-listener.component.scss']
})
export class CommitsWithNgrxActionListenerComponent implements OnInit {

  username = 'yanxch';

  // Shared State
  commits$: Observable<Commit[]>;
  //
  // Local State
  commitsFailures$ = new BehaviorSubject<Failure[]>([]);
  commitsLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private store: Store<AppState>,
              private actions$: Actions<CommitsActionsUnion>) {
    this.commits$ = this.store.select(commits)
      .pipe(tap(() => this.commitsLoading$.next(false)));

    this.actions$
      .pipe(
        ofType(CommitActionTypes.LoadCommitsFailure),
        map(() => [new Failure('An error occured')]),
        tap(() => this.commitsLoading$.next(false))
      )
      .subscribe(this.commitsFailures$);
  }
   
  ngOnInit() {}

  onSearch() {
    this.store.dispatch(new LoadCommits({ username: this.username }));
    this.commitsLoading$.next(true); // Not very resilient, if the effect is not sending the request 'Loading...' will be forever
                                     // The same happens in the ngrx variant without action listeners in the component too.
  }
}
