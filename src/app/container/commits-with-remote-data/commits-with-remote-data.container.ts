import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Commit, readCommitsByUsername} from 'src/api/commits.api';
import {failure, loading, notAsked, RemoteData, success} from 'src/app/components/remote-data/remote-data';
import {onChange} from 'src/app/util/input-changed';
import {Failure} from 'src/state/model/failure';


@Component({
  selector: 'commits-with-remote-data-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithRemoteDataContainer implements OnChanges {

  @Input()
  username: string;

  commits: RemoteData<Commit[], Failure[]> = notAsked;
  
  constructor() { }

  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommits);
  }

  loadCommits = (username) => {
    this.commits = loading;
    readCommitsByUsername(username)
      .then(this.handleSuccess)
      .catch(this.handleFailure);
  }

  handleSuccess = (commits: Commit[]) => {
    this.commits = success(commits);
  }

  handleFailure = () => {
    this.commits = failure([new Failure('Oh dear! Something went wrong, we are sorry!')]);
  }
}
