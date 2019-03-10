import {Action} from '@ngrx/store';
import {Commit} from 'src/api/commits.api';
import {Failure} from '../model/failure';

export enum CommitActionTypes {
  LoadCommits = '[API Commits] Load',
  LoadCommitsSuccess = '[API Commmits] Loading Success',
  LoadCommitsFailure = '[API Commits] Loading Failure',
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