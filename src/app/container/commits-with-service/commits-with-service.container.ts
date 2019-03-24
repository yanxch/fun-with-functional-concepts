import {Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Commit} from 'src/api/commits.api';
import {CommitsService} from 'src/api/commits.service';
import {Failure} from 'src/state/model/failure';

/**
 * 
 * It is the first design descision:
 * Does the container handles the error or does it propagate it? You decide!
 * 
 * 
 * A Container does not have Styles nor any template for himself!
 *  
 **/
@Component({
  selector: 'commits-with-service-container',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsWithServiceContainer implements OnChanges {
  
  @Input() username: string;

  commits$: Observable<Commit[]> = of([]);
  failures: Failure[] = [];

  constructor(private commitsService: CommitsService) { }

  ngOnChanges({ username }: SimpleChanges) {
    if (hasChanged(username)) {
      this.loadCommmits(this.username);
    }
  }

  loadCommmits(username: string) {
    this.commits$ = this.commitsService.readCommitsByUsername(username)
      .pipe(
        tap(this.resetFailure),
        catchError(this.handleFailure)
      );
  }

  resetFailure = () => {
    this.failures = [];
  }

  handleFailure = () => {
    this.failures = [new Failure('Oh dear! Something went wrong, we are sorry!')];
    return of([]);
  };
}


const hasChanged = (change: SimpleChange) => change.currentValue !== change.previousValue;