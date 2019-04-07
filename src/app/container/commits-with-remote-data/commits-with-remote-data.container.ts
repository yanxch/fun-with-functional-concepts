import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {failure, loading, notAsked, RemoteData, success} from '@state/model/remote-data';
import {Commit, readCommitsByUsername} from '@api/commits.api';
import {Failure} from '@state/model/failure';
import {onChange} from '@uitl/input-changed';


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
