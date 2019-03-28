import {Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Commit} from 'src/api/commits.api';
import {RemoteData} from 'src/app/components/remote-data/remote-data';
import {onChange} from 'src/app/util/input-changed';
import {LoadCommits} from 'src/state/actions/commits.actions';
import {Failure} from 'src/state/model/failure';
import {AppState} from 'src/state/reducers';
import {commitsAsRemoteData} from 'src/state/selectors/commits.selectors';

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
