import {Action} from '@ngrx/store';
import {Commit} from 'src/api/commits.api';
import {Failure} from '../model/failure';

export enum ActionTypes {
  LoadCommits = '[API Commits] Load',
  LoadCommitsSuccess = '[API Commmits] Loading Success',
  LoadCommitsFailure = '[API Commits] Loading Failure',
}

export class LoadCommits implements Action {
  readonly type = ActionTypes.LoadCommits;
}

export class LoadCommitsSuccess implements Action {
  readonly type = ActionTypes.LoadCommitsSuccess;

  constructor(public payload: { commits: Commit[] }) {}
}

export class LoadCommitsFailure implements Action {
  readonly type = ActionTypes.LoadCommitsFailure;

  constructor(public payload: { errors: Failure[] }) {}
}

export type Union = LoadCommits | LoadCommitsSuccess | LoadCommitsFailure; 