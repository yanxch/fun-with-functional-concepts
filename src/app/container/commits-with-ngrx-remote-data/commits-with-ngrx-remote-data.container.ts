import {Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {RemoteData} from '@state/model/remote-data';
import {Commit} from '@api/commits.api';
import {AppState} from '@state/reducers';
import {commitsAsRemoteData} from '@state/selectors/commits.selectors';
import {onChange} from '@uitl/input-changed';
import {LoadCommits} from '@state/actions/commits.actions';
import {Failure} from '@state/model/failure';

@Component({
  selector: 'commits-with-ngrx-remote-data-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithNgrxRemoteDataContainer implements OnChanges {

  @Input()
  username: string;

  commits$: Observable<RemoteData<Commit[], Failure[]>>;

  constructor(private store: Store<AppState>) { 
    this.commits$ = this.store.select(commitsAsRemoteData);
  }

  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommits);
  }
  
  loadCommits = (username: string) => {
    this.store.dispatch(new LoadCommits({ username }));
  }
}
