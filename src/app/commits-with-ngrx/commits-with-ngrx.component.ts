import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from 'src/api/commits.api';
import {LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {commits, commitsFailuerState, commitsLoadingState} from 'src/state/selectors/commits.selectors';

@Component({
  selector: 'commits-with-ngrx',
  templateUrl: './commits-with-ngrx.component.html',
  styleUrls: ['./commits-with-ngrx.component.scss']
})
export class CommitsWithNgrxComponent implements OnInit {

  username: string = 'yanxch';

  commits$: Observable<Commit[]>;
  commitsLoading$: Observable<boolean>;
  commitsFailure$: Observable<Failure[]>;

  constructor(private store: Store<AppState>) {
    this.commits$ = this.store.select(commits);
    this.commitsLoading$ = this.store.select(commitsLoadingState);
    this.commitsFailure$ = this.store.select(commitsFailuerState);
  }

  ngOnInit() {}

  onSearch() {
    this.store.dispatch(new LoadCommits({ username: this.username }));
  }
}
