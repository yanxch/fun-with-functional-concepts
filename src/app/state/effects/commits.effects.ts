import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap, debounceTime, tap} from 'rxjs/operators';
import {CommitActionTypes, CommitsActionsUnion, LoadCommitsFailure, LoadCommitsSuccess} from '../actions/commits.actions';
import {Failure} from '../model/failure';
import {CommitsService} from '@api/commits.service';

@Injectable()
export class CommitsEffects {
  
  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType(CommitActionTypes.LoadCommits),
      tap((a) => console.log('EFFECT ', a)),
      debounceTime(500),
      map(action => action.payload),
      mergeMap(({ username }) => 
        this.commitsService.readCommitsByUsername$(username)
          .pipe(
            map(commits => new LoadCommitsSuccess({ commits })),
            catchError(() => of(new LoadCommitsFailure({ errors: [ new Failure('Could not load Commits')] })))
          )      
      )
  );
  
  constructor(private actions$: Actions<CommitsActionsUnion>,
              private commitsService: CommitsService) {}
}
