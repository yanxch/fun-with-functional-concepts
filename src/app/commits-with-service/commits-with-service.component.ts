import { Component, OnInit } from '@angular/core';
import {CommitsService} from 'src/api/commits.service';
import {Commit} from 'src/api/commits.api';
import {catchError, tap} from 'rxjs/operators';
import {of, Observable} from 'rxjs';
import {Failure} from 'src/state/model/failure';

@Component({
  selector: 'app-commits-with-service',
  templateUrl: './commits-with-service.component.html',
  styleUrls: ['./commits-with-service.component.scss']
})
export class CommitsWithServiceComponent implements OnInit {

  username = 'yanxch';
  commits$: Observable<Commit[]> = of([]);
  failures: Failure[] = [];

  constructor(private commitsService: CommitsService) { }

  ngOnInit() {}

  onSearch() {
    this.commits$ = this.commitsService.readCommitsByUsername(this.username)
      .pipe(
        tap(this.resetFailure),
        catchError(this.handleError)
      );
  }

  resetFailure = () => {
    this.failures = [];
  }

  handleError = () => {
    this.failures = [new Failure('We are sorry. An error occured')];
    return of([]);
  };

}
