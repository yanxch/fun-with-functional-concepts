import {Action} from '@ngrx/store';
import {Commit} from '@api/commits.api';
import {Failure} from '@state/model/failure';

export enum CommitActionTypes {
  LoadCommits = '[API Commits] Load',
  LoadCommitsSuccess = '[API Commits] Load Success',
  LoadCommitsFailure = '[API Commits] Load Failure',
}

export class LoadCommits implements Action {
  readonly type = CommitActionTypes.LoadCommits;

  constructor(public payload: { username: string }) {}
}

export class LoadCommitsSuccess implements Action {
  readonly type = CommitActionTypes.LoadCommitsSuccess;

  constructor(public payload: { commits: Commit[] }) {}
}

export class LoadCommitsFailure implements Action {
  readonly type = CommitActionTypes.LoadCommitsFailure;

  constructor(public payload: { errors: Failure[] }) {}
}

export type CommitsActionsUnion = LoadCommits | LoadCommitsSuccess | LoadCommitsFailure; 

//{ type: 'FETCH_POSTS' }
//{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
//{ type: 'FETCH_POSTS', status: 'success', response: { ... } }