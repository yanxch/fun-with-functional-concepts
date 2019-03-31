import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Commit} from '../../../api/commits.api';
import {CommitsService} from '../../../api/commits.service';
import {onChange} from '../../util/input-changed';
import {Failure} from '../../../state/model/failure';

/**
 * 
 * It is the first design descision:
 * Does the container handles the error or does it propagate it? You decide!
 * 
 * 
 * A container does not have styles nor any template for itself!
 *  
 **/
@Component({
  selector: 'commits-with-service-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithServiceContainer implements OnChanges {
  
  @Input() username: string;

  commits: Commit[] = [];
  failures: Failure[] = [];

  constructor(private commitsService: CommitsService) { }

  ngOnChanges({username}: SimpleChanges) {
    onChange(username, this.loadCommmits);
  }

  loadCommmits = (username: string) => {
    this.commitsService.readCommitsByUsername(username)
      .then(this.handleSuccess)
      .catch(this.handleFailure)
  }

  handleSuccess = (commits: Commit[]) => {
    this.failures = [];
    this.commits = commits;
  }

  handleFailure = () => {
    this.commits = [];
    this.failures = [new Failure('Oh dear! Something went wrong, we are sorry!')];
  };
}
